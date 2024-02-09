import { useEffect } from 'react'
import { Stack, Typography, useTheme } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { ProductsList } from '@/components/layout'
import { FONTS } from '@/styles'
import { priceMask } from '@/utils/price-mask'
import { Btn } from '@/components/ui'
import { useProductDetail } from './useProductDetail'
import { useAppDispatch } from '@/store/hook/useRedux'
import { loadCart } from '@/store/actions'
import * as S from './product-detail-styles'

export const ProductDetail = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { product, prodDetail, setProdDetail, addProductCart } =
    useProductDetail()
  const { name, price, description, url } = prodDetail

  useEffect(() => {
    if (product) {
      setProdDetail({
        id: product.id,
        name: product.name,
        categoria: product.categoria,
        description: product.description,
        price: priceMask({ value: product.price }),
        url: product.url,
      })
    }
    dispatch(loadCart())
  }, [product, setProdDetail, dispatch])

  return (
    <section>
      <S.ProductContainer>
        <div>
          <img src={url} alt="Foto do produto" />
        </div>

        <div className="MuiCardProductInfo">
          <Typography
            component="h3"
            variant="h1"
            sx={{
              fontSize: FONTS.fontSizes['6xl'],
              textTransform: 'capitalize',
            }}
          >
            {name}
          </Typography>
          <Typography component="span" variant="h4">
            {price}
          </Typography>
          <Typography component="p" variant="subtitle1">
            {description}
          </Typography>

          <Stack marginTop={theme.spacing(3)}>
            <div>
              <Btn
                label="Adicionar ao carrinho"
                onClick={addProductCart}
                endIcon={<AddShoppingCartIcon />}
                sx={{ p: theme.spacing(1, 3) }}
              />
            </div>
          </Stack>
        </div>
      </S.ProductContainer>

      <ProductsList title="Productos similares" />
    </section>
  )
}

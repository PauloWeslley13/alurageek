import { Stack, Typography, useTheme } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { ProductsList } from '@/components/layout'
import { FONTS } from '@/styles'
import { ButtonIcon } from '@/components/ui'
import { useProductDetail } from './useProductDetail'
import { useAppSelector } from '@/store/hook/useRedux'
import { useProductsFilter } from '@/hooks/useProductsFilter'
import * as S from './product-detail-styles'

export const ProductDetail = () => {
  const { productsFilter, isLoading } = useProductsFilter()
  const { isLogged } = useAppSelector((state) => state.user)
  const prodDetail = useAppSelector((state) => state.productDetail)
  const { addProductCart } = useProductDetail()
  const theme = useTheme()
  const { name, price, description, url } = prodDetail

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
            fontSize={FONTS.fontSizes['6xl']}
            textTransform="capitalize"
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
              {isLogged && (
                <ButtonIcon
                  onClick={addProductCart}
                  props={{
                    label: 'Adicionar ao carrinho',
                    icon: AddShoppingCartIcon,
                  }}
                />
              )}
            </div>
          </Stack>
        </div>
      </S.ProductContainer>

      <ProductsList
        props={{
          title: 'Produtos similares',
          productList: productsFilter,
          isLoading,
        }}
      />
    </section>
  )
}

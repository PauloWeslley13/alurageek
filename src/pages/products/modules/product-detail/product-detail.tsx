import { Stack, Typography, useTheme } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { ProductsList } from '@/components/layout'
import { FONTS } from '@/styles'
import { ButtonIcon } from '@/components/ui'
import { useProductDetail } from './useProductDetail'
import { useAppSelector } from '@/store/hook/useRedux'
import * as S from './product-detail-styles'

export const ProductDetail = () => {
  const theme = useTheme()
  const { isLogged } = useAppSelector((state) => state.user)
  const { prodDetail, addProductCart } = useProductDetail()
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

      <ProductsList title="Produtos similares" />
    </section>
  )
}

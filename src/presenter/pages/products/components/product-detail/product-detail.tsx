import { Stack, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { ProductsList } from '@/presenter/components/layout'
import { FONTS } from '@/presenter/styles'
import { ButtonIcon } from '@/presenter/components/ui'
import { useProductDetail } from './useProductDetail'
import * as S from './product-detail-styles'

export const ProductDetail = () => {
  const {
    addProductCart,
    productsFilter,
    isLoading,
    isLogged,
    theme,
    prodDetail,
  } = useProductDetail()
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

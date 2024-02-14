import { Stack, Typography, useTheme } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { ProductsList } from '@/components/layout'
import { FONTS } from '@/styles'
import { Btn } from '@/components/ui'
import { useProductDetail } from './useProductDetail'
import * as S from './product-detail-styles'

export const ProductDetail = () => {
  const theme = useTheme()
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

import { Typography, useTheme } from '@mui/material'
import { CreateProduct } from './create-product'
import { FONTS } from '@/styles'
import * as S from './product-info-styles'

export const ProductInfo = () => {
  const theme = useTheme()

  return (
    <S.ProductInfoContainer>
      <Typography
        component="h2"
        variant="h4"
        sx={{
          fontSize: FONTS.fontSizes['3xl'],
          color: theme.palette.primary.dark,
        }}
      >
        Agregar nuevo producto
      </Typography>

      <CreateProduct />
    </S.ProductInfoContainer>
  )
}

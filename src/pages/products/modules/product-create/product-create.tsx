import { Typography, useTheme } from '@mui/material'
import { FormCreateProduct } from './form-create-product/form-create-product'
import { FONTS } from '@/styles'
import * as S from './product-create-styles'

export const ProductCreate = () => {
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
        Cadastrar novo produto
      </Typography>

      <FormCreateProduct />
    </S.ProductInfoContainer>
  )
}

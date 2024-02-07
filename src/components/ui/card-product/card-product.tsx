import { Theme } from '@mui/material'
import Typography from '@mui/material/Typography'
import { ProductsProps } from '@/components/types/products-props'
import { Btn } from '../index'
import * as S from './card-product-styles'

type CardProductProps = {
  card: ProductsProps
}

export const CardProduct = ({ card }: CardProductProps) => {
  const { name, price, url } = card

  return (
    <S.CardProduct>
      <img src={url} alt="Imagem do produto" />

      <div>
        <Typography
          component="h2"
          variant="h4"
          sx={{ color: (theme: Theme) => theme.palette.grey.A700 }}
        >
          {name}
        </Typography>
        <Typography
          component="span"
          variant="subtitle1"
          sx={{ color: (theme: Theme) => theme.palette.grey.A700 }}
        >
          {price}
        </Typography>

        <Btn label="Ver producto" sx={{ border: 'none' }} />
      </div>
    </S.CardProduct>
  )
}

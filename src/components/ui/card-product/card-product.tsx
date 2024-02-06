import { Theme } from '@mui/material'
import Typography from '@mui/material/Typography'
import { products } from '@/store/data/products.json'
import { Btn } from '../index'
import * as S from './card-product-styles'

type CardProductProps = {
  card: (typeof products)[0]
}

export const CardProduct = ({ card }: CardProductProps) => {
  const { title, price, image } = card

  return (
    <S.CardProduct>
      <img src={image} alt="Imagem do produto" />

      <div>
        <Typography
          component="h2"
          variant="h4"
          sx={{ color: (theme: Theme) => theme.palette.grey.A700 }}
        >
          {title}
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

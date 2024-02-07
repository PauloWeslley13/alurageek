import { useNavigate } from 'react-router-dom'
import { Theme, Typography } from '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { ProductsProps } from '@/components/types/products-props'
import { Btn } from '../index'
import { DialogDeleteProduct } from './dialog-delete-product'
import * as S from './card-product-styles'

type CardProductProps = {
  card: ProductsProps
}

export const CardProduct = ({ card }: CardProductProps) => {
  const { id, name, price, url } = card
  const navigate = useNavigate()

  return (
    <S.CardProduct>
      <S.CardProductImage imageUrl={url}>
        <div>
          <DialogDeleteProduct product={card} />

          <S.CardButton>
            <BorderColorIcon />
          </S.CardButton>
        </div>
      </S.CardProductImage>

      <div className="MuiCardProductInfo">
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

        <Btn
          label="Ver producto"
          sx={{ border: 'none' }}
          onClick={() => navigate(`/product/detail/${id}`)}
        />
      </div>
    </S.CardProduct>
  )
}

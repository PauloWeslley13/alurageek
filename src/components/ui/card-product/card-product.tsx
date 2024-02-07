import { useNavigate } from 'react-router-dom'
import { Theme, Typography } from '@mui/material'
import { ProductsProps } from '@/components/types/products-props'
import { DialogDeleteProduct } from './dialog-delete-product'
import { DialogEditProduct } from '@/pages/products/modules'
import { Btn } from '../index'
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

          <DialogEditProduct product={card} />
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

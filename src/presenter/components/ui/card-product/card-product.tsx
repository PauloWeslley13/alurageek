import { useNavigate } from 'react-router-dom'
import { Theme } from '@mui/material'
import Typography from '@mui/material/Typography'
import { DialogDeleteProduct } from './dialog-delete-product'
import { useAppSelector } from '@/main/store/hook/useRedux'
import { priceMask } from '@/utils/price-mask'
import { DialogEditProduct } from '@/presenter/pages/products/components'
import { ProductsProps } from '../../types'
import { Button } from '../index'
import * as S from './card-product-styles'

type CardProductProps = {
  card: ProductsProps
}

export const CardProduct = ({ card }: CardProductProps) => {
  const { id, name, price, url } = card
  const { isLogged } = useAppSelector((state) => state.user)
  const navigate = useNavigate()

  return (
    <S.CardProduct>
      <S.CardProductImage imageUrl={url}>
        {isLogged && (
          <div>
            <DialogDeleteProduct product={card} />

            <DialogEditProduct product={card} />
          </div>
        )}
      </S.CardProductImage>

      <div className="MuiCardProductInfo">
        <Typography
          component="h2"
          variant="h4"
          sx={{
            color: (theme: Theme) => theme.palette.grey.A700,
            textTransform: 'capitalize',
          }}
        >
          {name}
        </Typography>
        <Typography
          component="span"
          variant="subtitle1"
          sx={{ color: (theme: Theme) => theme.palette.grey.A700 }}
        >
          {priceMask({ value: price })}
        </Typography>

        <div>
          <Button
            label="Ver produto"
            onClick={() => navigate(`/product/detail/${id}`)}
            sx={{ border: 'none', background: 'transparent' }}
          />
        </div>
      </div>
    </S.CardProduct>
  )
}

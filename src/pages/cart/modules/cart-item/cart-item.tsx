import { IconButton, TextField, Theme, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { priceMask } from '@/utils/price-mask'
import * as S from './cart-item-styles'

type CartProductProps = {
  id: string
  name: string
  description: string
  photoUrl: string
  price: string
  category: string
  quantity: number
}

type CartItemProps = {
  cartItem: CartProductProps
}

export const CartItem = ({ cartItem }: CartItemProps) => {
  const { quantity, description, name, photoUrl, price } = cartItem

  return (
    <S.CartItemWrap>
      <S.CartItemContent>
        <img src={photoUrl} alt="Foto do Produto" />

        <div className="MuiCartItem-root">
          <div className="MuiCartItemContent-root">
            <Typography component="h3" variant="h3">
              {name}
            </Typography>
            <Typography component="p" variant="body1" color="gray">
              {description}
            </Typography>
          </div>

          <Typography component="span" variant="h4">
            {priceMask({ value: price })}
          </Typography>
        </div>
      </S.CartItemContent>

      <TextField
        value={quantity}
        label="Quantidade"
        type="number"
        size="small"
        sx={{ width: (theme: Theme) => theme.spacing(24) }}
      />

      <IconButton>
        <DeleteOutlineIcon />
      </IconButton>
    </S.CartItemWrap>
  )
}

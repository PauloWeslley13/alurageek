import { IconButton, Stack, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { priceMask } from '@/utils/price-mask'
import { useCart } from '../../hook/useCart'
import { FONTS } from '@/presenter/styles'
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
  const { id, quantity, description, name, photoUrl, price } = cartItem
  const { incrementQuantity, decrementQuantity, handleDeleteItemCart } =
    useCart()

  return (
    <S.CartItemWrap>
      <S.CartItemContent>
        <img src={photoUrl} alt="Foto do Produto" />

        <div className="MuiCartItem-root">
          <div className="MuiCartItemContent-root">
            <Typography component="h3" variant="h3" color="black">
              {name}
            </Typography>
            <Typography component="p" variant="body1" color="gray">
              {description}
            </Typography>
          </div>

          <Typography component="span" variant="h4" color="black">
            {priceMask({ value: price })}
          </Typography>
        </div>
      </S.CartItemContent>

      <Stack alignItems="center">
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: FONTS.fontWeight.semibold }}
        >
          Quantidade
        </Typography>

        <Stack flexDirection="row" gap={2}>
          <RemoveCircleOutlineIcon
            sx={{ cursor: 'pointer' }}
            onClick={() => decrementQuantity(id, quantity)}
          />
          <Typography sx={{ fontWeight: FONTS.fontWeight.medium }}>
            {quantity}
          </Typography>
          <AddCircleOutlineIcon
            sx={{ cursor: 'pointer' }}
            onClick={() => incrementQuantity(id)}
          />
        </Stack>
      </Stack>

      <IconButton onClick={() => handleDeleteItemCart(id)}>
        <DeleteOutlineIcon />
      </IconButton>
    </S.CartItemWrap>
  )
}

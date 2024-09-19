import { IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { CartProductProps } from '@/presenter/components/types'
import { CartItem } from '@/presenter/components/ui'
import { useFormatted } from '@/presenter/hooks/useFormatted'
import { useProductCart } from '@/presenter/hooks/useProductCart'

type CartItemSideBarProps = {
  cartItem: CartProductProps
}

function CartItemSidebar({ cartItem }: CartItemSideBarProps) {
  const { quantity, name, imageUrl, price } = cartItem
  const { formatted } = useFormatted()
  const {
    handlerIncrementQuantity,
    handlerDecrementQuantity,
    handleDeleteItemCart,
  } = useProductCart()

  return (
    <CartItem.Root sx={{ p: 2 }}>
      <CartItem.Content imageURL={imageUrl} sx={{ gap: 1, width: '55%' }}>
        <CartItem.Body
          name={name}
          price={formatted.priceMask(price)}
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 1,
            '& h3': {
              fontSize: (theme) => theme.typography.font.sm,
            },
            '& span': {
              fontSize: (theme) => theme.typography.font.base,
            },
          }}
        />
      </CartItem.Content>

      <CartItem.Actions
        quantity={quantity}
        incrementQuantity={() => handlerIncrementQuantity(cartItem.id)}
        decrementQuantity={() =>
          handlerDecrementQuantity(cartItem.id, cartItem.quantity)
        }
      />

      <IconButton
        color="error"
        onClick={() => handleDeleteItemCart(cartItem.id)}
      >
        <DeleteOutlineIcon />
      </IconButton>
    </CartItem.Root>
  )
}

export { CartItemSidebar }

import { IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { CartItem } from '@/presenter/components/ui'
import { CartProductProps } from '@/presenter/components/types'
import { useFormatted } from '@/presenter/hooks/useFormatted'
import { useProductCart } from '@/presenter/hooks/useProductCart'

type CartItemProps = {
  cartItem: CartProductProps
}

export function ShopCartItem({ cartItem }: CartItemProps) {
  const { id, quantity, description, name, imageUrl, price } = cartItem
  const { formatted } = useFormatted()
  const {
    handlerIncrementQuantity,
    handlerDecrementQuantity,
    handleDeleteItemCart,
  } = useProductCart()

  return (
    <CartItem.Root>
      <CartItem.Content imageURL={imageUrl}>
        <CartItem.Body
          name={name}
          price={formatted.priceMask(price)}
          description={description}
        />
      </CartItem.Content>

      <CartItem.Actions
        quantity={quantity}
        incrementQuantity={() => handlerIncrementQuantity(id)}
        decrementQuantity={() => handlerDecrementQuantity(id, quantity)}
      />

      <IconButton
        aria-label="Delete product cart"
        color="error"
        onClick={() => handleDeleteItemCart(id)}
      >
        <DeleteOutlineIcon />
      </IconButton>
    </CartItem.Root>
  )
}

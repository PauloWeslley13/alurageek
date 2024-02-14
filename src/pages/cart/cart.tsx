import { useMemo } from 'react'
import { Stack } from '@mui/material'
import { useAppSelector } from '@/store/hook/useRedux'
import { ProductsCart } from '@/components/types'

export const Cart = () => {
  const cart = useAppSelector((state) => state.cart)
  const products = useAppSelector((state) => state.products)

  const { carts, allItem } = useMemo(() => {
    const cartReducer = cart.data.reduce((items: ProductsCart[], itemCart) => {
      const item = products.find((item) => item.id === itemCart.id)

      if (item) {
        items.push({
          id: item.id,
          quantity: itemCart.quantity,
        })
      }

      return items
    }, [])

    return { carts: cartReducer, allItem: cart.totalPrice }
  }, [cart, products])

  console.log(cart)
  console.log(carts)
  console.log(allItem)

  return (
    <Stack alignItems="center" justifyContent="center">
      <div>
        <ul>
          {cart.data.map((props) => (
            <li key={props.id}>
              <p>{props.id}</p>
              <span>{props.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    </Stack>
  )
}

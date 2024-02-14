import { ProductsCart } from '@/components/types'
import { useAppSelector } from '@/store/hook/useRedux'
import { useMemo } from 'react'

export const useCart = () => {
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

  const { data } = useMemo(() => {
    const data = carts.map((props) => {
      const [productCart] = products.filter(
        (product) => product.id === props.id,
      )

      return {
        id: props.id,
        name: productCart?.name,
        description: productCart?.description,
        photoUrl: productCart?.url,
        price: productCart?.price,
        category: productCart?.category,
        quantity: props.quantity,
      }
    })

    return { data }
  }, [carts, products])

  return {
    data,
    carts,
    allItem,
  }
}

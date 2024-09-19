import { useMemo } from 'react'
import { ProductsCart } from '@/presenter/components/types'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'
import {
  handleQuantity,
  removeToCart,
  resetCart,
} from '@/main/store/ducks/cart'

export function useProductCart() {
  const { user } = useAppSelector((state) => state.authentication)
  const search = useAppSelector((state) => state.search)
  const { products } = useAppSelector((state) => state.products)
  const { cart, totalPrice } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const carts = useMemo(() => {
    const searching = new RegExp(search, 'i')

    return cart.reduce((items, itemCart) => {
      const product = products.find((item) => item.id === itemCart.id)

      if (product?.name.match(searching)) {
        if (product) {
          items.push({ id: product.id, quantity: itemCart.quantity })
        }
      }

      return items
    }, [] as ProductsCart[])
  }, [cart, products, search])

  const loadCartProducts = useMemo(() => {
    return carts.map((props) => {
      const [productCart] = products.filter(
        (product) => product.id === props.id,
      )

      return {
        ...productCart,
        id: props.id,
        quantity: props.quantity,
      }
    })
  }, [carts, products])

  function handlerDecrementQuantity(id: string, quantity: number) {
    if (quantity >= 1) {
      dispatch(handleQuantity({ id, quantity: -1 }))
    }
  }

  function handlerIncrementQuantity(id: string) {
    dispatch(handleQuantity({ id, quantity: +1 }))
  }

  function handleDeleteItemCart(id: string) {
    dispatch(removeToCart({ id }))
  }

  function handleCheckout() {
    dispatch(resetCart())
  }

  return {
    user,
    totalPrice,
    carts,
    loadCartProducts,
    handleCheckout,
    handleDeleteItemCart,
    handlerIncrementQuantity,
    handlerDecrementQuantity,
  }
}

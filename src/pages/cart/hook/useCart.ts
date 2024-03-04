import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { ProductsCart } from '@/components/types'
import { useAppDispatch, useAppSelector } from '@/store/hook/useRedux'
import { handleQuantity, removeToCart, resetCart } from '@/store/reducers'
import { CartUseCase } from './../../../../domain/cart/cart-use-cases'

const cartUseCase = new CartUseCase()

export const useCart = () => {
  const { user } = useAppSelector((state) => state.user)
  const { products } = useAppSelector((state) => state.products)
  const { cart } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const { carts, calcTotal } = useMemo(() => {
    let totalPrice = 0

    const cartReducer = cart.reduce((items: ProductsCart[], itemCart) => {
      const item = products.find((item) => item.id === itemCart.id)
      totalPrice += Number(item?.price) * itemCart.quantity

      if (item) {
        items.push({
          id: item.id,
          quantity: itemCart.quantity,
        })
      }

      return items
    }, [])

    return { carts: cartReducer, calcTotal: totalPrice }
  }, [cart, products])

  const { data } = useMemo(() => {
    const data = carts.map((props) => {
      const [productCart] = products.filter(
        (product) => product.id === props.id,
      )

      return {
        id: props.id,
        name: productCart.name,
        description: productCart.description,
        photoUrl: productCart.url,
        price: productCart.price,
        category: productCart.category,
        quantity: props.quantity,
      }
    })

    return { data }
  }, [carts, products])

  const decrementQuantity = (id: string, quantity: number) => {
    if (quantity >= 1) {
      dispatch(handleQuantity({ id, quantity: -1 }))
    }
  }

  const incrementQuantity = (id: string) => {
    dispatch(handleQuantity({ id, quantity: +1 }))
  }

  const handleDeleteItemCart = (id: string) => {
    dispatch(removeToCart({ id }))
  }

  const handleCheckout = () => {
    cartUseCase.savedUserCart(user.id, {
      data: carts,
      totalPrice: calcTotal,
    })

    cartUseCase.removeCart(user.id, {
      data: carts,
      totalPrice: calcTotal,
    })

    dispatch(resetCart())
  }

  const handleSavedCart = async () => {
    cartUseCase.createCart(user.id, {
      data: carts,
      totalPrice: calcTotal,
    })
  }

  const { data: cartUser } = useQuery(['cartUserSaved'], () =>
    cartUseCase.getCartByUserIdSaved(user.id),
  )

  console.log(cartUser)

  return {
    user,
    data,
    carts,
    calcTotal,
    incrementQuantity,
    decrementQuantity,
    handleDeleteItemCart,
    handleCheckout,
    handleSavedCart,
  }
}

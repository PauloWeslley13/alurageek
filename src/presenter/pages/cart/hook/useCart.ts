import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'
import { loadCart, loadSavedCart } from '@/main/store/ducks/cart'
import { useFormatted } from '@/presenter/hooks/useFormatted'
import { useProductCart } from '@/presenter/hooks/useProductCart'
import { useSnackBar } from '@/presenter/hooks/useSnackBar'

export function useCart() {
  const { user } = useAppSelector((state) => state.authentication)
  const { totalPrice, loadCartProducts, carts } = useProductCart()
  const { openSnackBar, handleCloseSnackbar } = useSnackBar()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { formatted } = useFormatted()

  function handleCheckout() {
    if (!user) {
      return
    }

    const userId = user.id
    const cart = carts

    dispatch(loadCart({ userId, cart, totalPrice }))
  }

  function handleSavedCart() {
    if (!user) {
      return
    }

    dispatch(loadSavedCart({ userId: user.id, cart: carts, totalPrice }))
  }

  return {
    formatted,
    user,
    loadCartProducts,
    carts,
    handleCheckout,
    handleSavedCart,
    navigate,
    totalPrice,
    openSnackBar,
    handleCloseSnackbar,
  }
}

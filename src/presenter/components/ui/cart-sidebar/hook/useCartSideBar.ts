import { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'
import { useProductCart } from '@/presenter/hooks/useProductCart'
import { useFormatted } from '@/presenter/hooks/useFormatted'
import { loadUserCartSaved } from '@/main/store/ducks/cart'

export function useCartSideBar() {
  const [isCartSideBarOpen, setIsCartSideBarOpen] = useState(false)
  const { cart } = useAppSelector((state) => state.cart)
  const { loadCartProducts, totalPrice } = useProductCart()
  const { formatted } = useFormatted()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    dispatch(loadUserCartSaved())
  }, [dispatch])

  function handlerOpenCartSidebar() {
    setIsCartSideBarOpen(true)
  }

  function handlerCloseCartSidebar() {
    setIsCartSideBarOpen(false)
  }

  function handlerToCheckout() {
    setIsCartSideBarOpen(false)
    navigate('/cart')
  }

  return {
    isCartSideBarOpen,
    cart,
    loadCartProducts,
    totalPrice,
    formatted,
    handlerToCheckout,
    handlerOpenCartSidebar,
    handlerCloseCartSidebar,
  }
}

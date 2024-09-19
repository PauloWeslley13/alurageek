import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'
import { addToCart } from '@/main/store/ducks/cart'
import { loadProductInfo } from '@/main/store/ducks/products'

export function useProductDetail() {
  const { user } = useAppSelector((state) => state.authentication)
  const { productId } = useParams()
  const dispatch = useAppDispatch()

  const getProductDetail = useCallback(() => {
    if (productId) {
      dispatch(loadProductInfo({ productId }))
    }
  }, [dispatch, productId])

  useEffect(() => getProductDetail(), [getProductDetail])

  function handlerAddProductCart() {
    if (productId && user) {
      dispatch(addToCart({ userId: user.id, productId }))
    }
  }

  return {
    handlerAddProductCart,
  }
}

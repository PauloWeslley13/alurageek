import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsProps } from '@/components/types/products-props'
import { useAppDispatch, useAppSelector } from '@/store/hook/useRedux'
import { addToCart } from '@/store/reducers'

export const useProductDetail = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user)
  const products = useAppSelector((state) => state.products)
  const product = products.find((item) => item.id === params.id)
  const [prodDetail, setProdDetail] = useState<ProductsProps>(
    {} as ProductsProps,
  )

  const addProductCart = () => {
    if (product) {
      dispatch(addToCart({ userId: user.id, product }))
    }
  }

  return {
    product,
    prodDetail,
    setProdDetail,
    addProductCart,
  }
}

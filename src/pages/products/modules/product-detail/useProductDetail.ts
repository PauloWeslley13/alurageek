import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsProps } from '@/components/types/products-props'
import { useAppDispatch, useAppSelector } from '@/store/hook/useRedux'
import { addToCart } from '@/store/reducers'
import { priceMask } from '@/utils/price-mask'

export const useProductDetail = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user)
  const products = useAppSelector((state) => state.products)
  const product = products.find((item) => item.id === params.id)
  const [prodDetail, setProdDetail] = useState<ProductsProps>(
    {} as ProductsProps,
  )

  useEffect(() => {
    if (product) {
      setProdDetail({
        id: product.id,
        name: product.name,
        category: product.category,
        description: product.description,
        price: priceMask({ value: product.price }),
        url: product.url,
      })
    }
  }, [product, setProdDetail, dispatch])

  const addProductCart = () => {
    if (product) {
      dispatch(addToCart({ userId: user.id, productId: product.id }))
    }
  }

  return {
    prodDetail,
    addProductCart,
  }
}

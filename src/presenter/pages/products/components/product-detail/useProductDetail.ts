import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from '@mui/material'
import { ProductsProps } from '@/presenter/components/types'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'
import { addToCart, getProductDetail } from '@/main/store/reducers'
import { useProductsFilter } from '@/presenter/hooks/useProductsFilter'
import { Format } from '@/domain/format'

const makeFormat = (): Format => new Format()

export const useProductDetail = () => {
  const { isLogged } = useAppSelector((state) => state.user)
  const prodDetail = useAppSelector((state) => state.productDetail)
  const { user } = useAppSelector((state) => state.user)
  const { products } = useAppSelector((state) => state.products)
  const { productsFilter, isLoading } = useProductsFilter()
  const params = useParams()
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const format = makeFormat()
  const product = products.find((item) => item.id === params.id)

  useEffect(() => {
    if (product) {
      const productDetail = {
        id: product.id,
        name: product.name,
        category: product.category,
        description: product.description,
        price: format.priceMask(product.price),
        url: product.url,
      } satisfies ProductsProps

      dispatch(getProductDetail(productDetail))
    }
  }, [dispatch, product, format])

  const addProductCart = () => {
    if (product) {
      dispatch(addToCart({ userId: user.id, productId: product.id }))
    }
  }

  return {
    addProductCart,
    productsFilter,
    isLoading,
    isLogged,
    theme,
    prodDetail,
  }
}

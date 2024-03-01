import { ProductUseCase } from './../../../../domain/product/product-use-cases'
import { ProductsProps, SchemaProductProps } from '@/components/types'
import { useAppDispatch, useAppSelector } from '@/store/hook/useRedux'
import { createProduct, deleteProduct, updateProduct } from '@/store/reducers'
import { toasts } from '@/components/ui'

const productUseCase = new ProductUseCase()

export const useProducts = () => {
  const { products } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const handleProductPOST = async (data: SchemaProductProps) => {
    productUseCase.createProduct(data, products).then((product) => {
      if (product) {
        dispatch(createProduct(product))
      } else {
        toasts.error({ title: 'Produto já cadastrado' })
      }
    })
  }

  const handleProductPUT = async (data: ProductsProps) => {
    const prod = productUseCase.updateProduct(data)
    toasts.success({ title: 'Produto Atualizado' })
    dispatch(updateProduct(prod))
  }

  const handleProductDELETE = async (data: ProductsProps) => {
    productUseCase.deleteProduct(data)
    toasts.success({ title: `Produto ${data.name} deletado` })
    dispatch(deleteProduct(data))
  }

  return {
    handleProductPOST,
    handleProductPUT,
    handleProductDELETE,
  }
}

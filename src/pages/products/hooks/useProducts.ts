import { ProductUseCase } from '../../../../domain/product'
import { ProductsProps, SchemaProductProps } from '@/components/types'
import { useAppDispatch, useAppSelector } from '@/store/hook/useRedux'
import { createProduct, deleteProduct, updateProduct } from '@/store/reducers'
import { toasts } from '@/components/ui'

const productUseCase = new ProductUseCase()

export const useProducts = () => {
  const { products } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const handleProductPOST = async (data: SchemaProductProps) => {
    await productUseCase.createProduct(data, products).then((data) => {
      if (data === 'Produto já cadastrado') {
        toasts.error({ title: 'Produto já cadastrado' })
        return
      }

      dispatch(createProduct(data))
      toasts.success({ title: 'Producto criado com sucesso' })
    })
  }

  const handleProductPUT = async (data: ProductsProps) => {
    await productUseCase.updateProduct(data).then((props) => {
      dispatch(updateProduct(props))
      toasts.success({ title: 'Produto Atualizado' })
    })
  }

  const handleProductDELETE = async (data: ProductsProps) => {
    await productUseCase.deleteProduct(data)
    toasts.success({ title: `Produto ${data.name} deletado` })
    dispatch(deleteProduct(data))
  }

  return {
    handleProductPOST,
    handleProductPUT,
    handleProductDELETE,
  }
}

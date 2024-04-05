import { ProductUseCase } from '@/domain/product'
import { ProductsProps, SchemaProductProps } from '@/presenter/components/types'
import { toasts } from '@/presenter/components/ui'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from '@/main/store/reducers'

const makeProduct = (): ProductUseCase => new ProductUseCase()

export const useProducts = () => {
  const { products } = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()
  const productUseCase = makeProduct()

  const handleProductPOST = async (data: SchemaProductProps) => {
    await productUseCase.createProduct(data, products).then((data) => {
      if (data === 'Produto já cadastrado') {
        toasts.error({ title: 'Produto já cadastrado' })
        return
      }

      dispatch(createProduct(data))
      toasts.success({ title: 'Produto criado com sucesso' })
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

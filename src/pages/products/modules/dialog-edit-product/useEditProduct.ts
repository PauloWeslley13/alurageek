import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ProductsProps,
  SchemaProductProps,
} from '@/components/types/products-props'
import { EditProductProps } from './edit-product-props'
import { toasts } from '@/components/ui'
import { schemaProduct } from '../schema-product'
import { useProducts } from '../../hooks/useProducts'
import { ProductUseCase } from '../../../../../domain/product/usecases'

const productUseCase = new ProductUseCase()

export const useEditProduct = ({ product }: EditProductProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const { handleProductPUT } = useProducts()
  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaProductProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaProduct),
  })

  useEffect(() => {
    setValue('name', product.name)
    setValue('description', product.description)
    setValue('price', product.price)
    setValue('category', product.category)
    setValue('url', product.url)
  }, [product, setValue])

  const handleOpenDialog = () => setOpen(true)
  const handleCloseDialog = () => setOpen(false)

  const updatedProduct = (data: SchemaProductProps) => {
    const isProductEqual = productUseCase.isVerifyIsEqualProduct({
      data,
      product,
    })

    const dataProducts: ProductsProps = {
      id: product.id,
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      url: data.url,
    }

    if (isProductEqual) {
      handleProductPUT(dataProducts)
      reset()
      handleCloseDialog()
    } else {
      toasts.error({ title: 'Não foi possível atualizar' })
    }
  }

  return {
    handleOpenDialog,
    handleCloseDialog,
    updatedProduct,
    open,
    errors,
    register,
    handleSubmit,
  }
}

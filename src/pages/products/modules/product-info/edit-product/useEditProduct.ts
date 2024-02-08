import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ProductsProps,
  SchemaProductProps,
  schemaProduct,
} from '@/components/types/products-props'
import { EditProductProps } from './edit-product-props'
import { isVerifyIsEqualProduct } from './functions/is-verify-is-equal-product'
import { useAppDispatch } from '@/store/hook/useRedux'
import { updateProduct } from '@/store/reducers'
import { toasts } from '@/components/ui'

export const useEditProduct = ({ product }: EditProductProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()
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
    setValue('categoria', product.categoria)
    setValue('url', product.url)
  }, [product, setValue])

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const updatedProduct = (data: SchemaProductProps) => {
    const isProductEqual = isVerifyIsEqualProduct({ data, product })

    const dataProducts: ProductsProps = {
      id: product.id,
      name: data.name,
      description: data.description,
      price: data.price,
      categoria: data.categoria,
      url: data.url,
    }

    if (isProductEqual) {
      dispatch(updateProduct(dataProducts))
      handleCloseDialog()
      reset()
    } else {
      toasts.error({ title: 'Não foi possível atualizar' })
    }

    console.log(data)
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

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  SchemaProductProps,
  schemaProduct,
} from '@/components/types/products-props'
import { useAppDispatch } from '@/store/hook/useRedux'
import { createProduct } from '@/store/reducers/products'

export const useCreateProduct = () => {
  const dispatch = useAppDispatch()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaProductProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaProduct),
  })

  const createdProduct = (data: SchemaProductProps) => {
    console.log(data)
    dispatch(createProduct(data))
    reset()
  }

  return {
    register,
    handleSubmit,
    createdProduct,
    errors,
  }
}

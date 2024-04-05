import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SchemaProductProps } from '@/presenter/components/types'
import { schemaProduct } from '../../schema-product'
import { useProducts } from '../../../hooks/useProducts'

export const useCreateProduct = () => {
  const { handleProductPOST } = useProducts()
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
    handleProductPOST(data)
    reset()
  }

  return {
    register,
    handleSubmit,
    createdProduct,
    errors,
  }
}

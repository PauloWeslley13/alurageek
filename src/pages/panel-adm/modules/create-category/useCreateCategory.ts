import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaCategory } from './schema-category'
import { CreateCategoryProps } from '@/components/types/category-props'
import { CategoryUseCase } from './../../../../../domain/category/category-use-cases'
import { useAppSelector } from '@/store/hook/useRedux'

const categoryUseCase = new CategoryUseCase()

export const useCreateCategory = () => {
  const { categories } = useAppSelector((state) => state.categories)
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCategoryProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaCategory),
  })

  const handleCategoryPOST = (data: CreateCategoryProps) => {
    console.log(data)
    categoryUseCase.createCategory(data, categories)
    reset()
  }

  return {
    errors,
    register,
    handleSubmit,
    handleCategoryPOST,
  }
}

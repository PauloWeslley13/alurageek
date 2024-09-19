import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormCategoryProps } from '@/presenter/pages/panel-adm-categories/types'
import { schemaCategory } from '@/validation'
import { loadCreateCategory } from '@/main/store/ducks/category'
import { useSnackBar } from '@/presenter/hooks/useSnackBar'
import { useAppDispatch } from '@/main/store/hook/useRedux'

export function useCreateCategory() {
  const { openSnackBar, handleCloseSnackbar } = useSnackBar()
  const dispatch = useAppDispatch()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCategoryProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaCategory),
  })

  function handlerCreateCategory(data: FormCategoryProps) {
    dispatch(loadCreateCategory({ ...data }))
    reset()
  }

  return {
    openSnackBar,
    errors,
    register,
    handleSubmit,
    handlerCreateCategory,
    handleCloseSnackbar,
  }
}

import { SyntheticEvent } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SnackbarCloseReason } from '@mui/material/Snackbar'
import { FormCategoryProps } from '@/presenter/pages/panel-adm-categories/types'
import { schemaCategory } from '@/validation'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'
import { loadCreateCategory } from '@/main/store/ducks/category'
import { openSnackbar, useSnackBar } from '@/main/store/ducks/snackbar'

export function useCreateCategory() {
  const openSnackBar = useAppSelector(useSnackBar)
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

  function handleCloseSnackbar(
    _: SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) {
    if (reason === 'clickaway') {
      return
    }

    dispatch(openSnackbar(false))
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

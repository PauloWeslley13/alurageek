import { SyntheticEvent } from 'react'
import { SnackbarCloseReason } from '@mui/material'
import { openSnackbar, useSelectorSnackBar } from '@/main/store/ducks/snackbar'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'

export function useSnackBar() {
  const openSnackBar = useAppSelector(useSelectorSnackBar)
  const dispatch = useAppDispatch()

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
    handleCloseSnackbar,
  }
}

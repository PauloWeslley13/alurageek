import { useCallback, useState } from 'react'
import { useAppSelector } from '@/store/hook/useRedux'
import { useTheme } from '@mui/material'

export const useMenuProfile = () => {
  const { user } = useAppSelector((state) => state.user)
  const [open, setOpen] = useState<boolean>(false)
  const theme = useTheme()

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = useCallback(() => {
    setOpen(false)
  }, [])

  return {
    handleOpenDialog,
    handleCloseDialog,
    user,
    open,
    theme,
  }
}

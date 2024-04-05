import { useCallback, useState } from 'react'
import { useTheme } from '@mui/material'
import { useAppSelector } from '@/main/store/hook/useRedux'

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

import { useState } from 'react'
import { useSnackbar } from '@mui/base/useSnackbar'

export default function useSnackBar() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const { getRootProps, onClickAway } = useSnackbar({
    onClose: handleClose,
    open,
    autoHideDuration: 5000,
  })

  const handleOpen = () => {
    setOpen(true)
  }

  return {
    open,
    getRootProps,
    onClickAway,
    handleClose,
    handleOpen,
  }
}

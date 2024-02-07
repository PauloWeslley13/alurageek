import { useState } from 'react'

export const useEditProduct = () => {
  const [open, setOpen] = useState<boolean>(false)
  // const dispatch = useAppDispatch()

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  return {
    handleOpenDialog,
    handleCloseDialog,
    open,
  }
}

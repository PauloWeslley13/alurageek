import { useState } from 'react'

export const useSideBar = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return {
    handleDrawerClose,
    handleDrawerOpen,
    open,
  }
}

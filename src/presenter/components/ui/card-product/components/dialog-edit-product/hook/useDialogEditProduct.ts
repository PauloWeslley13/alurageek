import { useState } from 'react'

export function useDialogEditProduct() {
  const [isDialogProductUpdateOpen, setIsDialogProductUpdateOpen] =
    useState(false)

  function handleOpenDialogProductUpdate() {
    return setIsDialogProductUpdateOpen(true)
  }

  function handleCloseDialogProductUpdate() {
    return setIsDialogProductUpdateOpen(false)
  }

  return {
    isDialogProductUpdateOpen,
    handleOpenDialogProductUpdate,
    handleCloseDialogProductUpdate,
  }
}

import { useState } from 'react'
import { useProducts } from '@/presenter/pages/products/hooks/useProducts'
import { ProductsProps } from '../../types'

export const useDialogProduct = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { handleProductDELETE } = useProducts()

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const handleDeleteProduct = (data: ProductsProps) => {
    handleProductDELETE(data)
    handleCloseDialog()
  }

  return {
    handleDeleteProduct,
    handleCloseDialog,
    handleOpenDialog,
    isOpen,
  }
}

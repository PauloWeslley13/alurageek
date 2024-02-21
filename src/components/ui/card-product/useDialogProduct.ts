import { useState } from 'react'
import { ProductsProps } from '@/components/types/products-props'
import { useProducts } from '@/pages/products/hooks/useProducts'

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

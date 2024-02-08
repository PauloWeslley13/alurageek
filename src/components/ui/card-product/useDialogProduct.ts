import { useState } from 'react'
import { ProductsProps } from '@/components/types/products-props'
import { useAppDispatch } from '@/store/hook/useRedux'
import { deleteProduct } from '@/store/reducers/products/products'

export const useDialogProduct = () => {
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const handleDeleteProduct = (data: ProductsProps) => {
    dispatch(deleteProduct(data))
    handleCloseDialog()
  }

  return {
    handleDeleteProduct,
    handleCloseDialog,
    handleOpenDialog,
    open,
  }
}

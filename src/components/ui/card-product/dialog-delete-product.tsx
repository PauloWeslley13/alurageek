import { alpha, useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { Dialog } from '../index'
import { ProductsProps } from '@/components/types/products-props'
import { useDialogProduct } from './useDialogProduct'
import { COLORS } from '@/styles'

type DialogDeleteProductProps = {
  product: ProductsProps
}

export const DialogDeleteProduct = ({ product }: DialogDeleteProductProps) => {
  const { handleDeleteProduct, handleOpenDialog, handleCloseDialog, open } =
    useDialogProduct()
  const theme = useTheme()

  return (
    <>
      <IconButton
        onClick={handleOpenDialog}
        sx={{
          color: theme.palette.primary.main,

          ':hover': {
            color: theme.palette.primary.dark,
            background: alpha(COLORS.zinc[50], 0.3),
          },
        }}
      >
        <DeleteIcon />
      </IconButton>
      <Dialog.Root
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Dialog.Header
          id="alert-dialog-title"
          title="Desejar excluir este produto?"
        />

        <Dialog.Content>
          <Dialog.Description
            id="alert-dialog-description"
            color="gray"
            variant="h5"
            description={`Produto ${product.name} será excluído`}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onClick={handleCloseDialog} sx={{ ...theme.typography.h4 }}>
            cancelar
          </Button>
          <Button
            onClick={() => handleDeleteProduct(product)}
            autoFocus
            color="error"
            sx={{ ...theme.typography.h4 }}
          >
            excluir
          </Button>
        </Dialog.Actions>
      </Dialog.Root>
    </>
  )
}

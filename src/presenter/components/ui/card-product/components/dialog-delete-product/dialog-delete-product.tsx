import { alpha, darken } from '@mui/material/styles'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { ProductModel } from '@/data/models'
import { Dialog } from '@/presenter/components/ui'
import { useDialogProduct } from './hook'

type DialogDeleteProductProps = {
  product: ProductModel
}

function DialogDeleteProduct({ product }: DialogDeleteProductProps) {
  const {
    handleDeleteProduct,
    handleOpenDialog,
    handleCloseDialog,
    isDialogProductDeleteOpen,
  } = useDialogProduct(product)

  return (
    <>
      <IconButton
        onClick={handleOpenDialog}
        sx={{
          color: (theme) => theme.palette.primary.main,
          ':hover': {
            color: (theme) => darken(theme.palette.primary.dark, 0.9),
            background: (theme) =>
              alpha(theme.palette.primary.contrastText, 0.3),
          },
        }}
      >
        <DeleteIcon />
      </IconButton>

      <Dialog.Root
        open={isDialogProductDeleteOpen}
        onClose={handleCloseDialog}
        aria-labelledby="dialog-product-update-title"
        aria-describedby="dialog-product-update-description"
      >
        <Dialog.Header
          id="dialog-product-update-title"
          title="Desejar excluir este produto?"
        />

        <Dialog.Content>
          <Dialog.Description
            id="dialog-product-update-description"
            color="gray"
            variant="h5"
            description={`Produto ${product.name} será excluído`}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button variant="outlined" onClick={handleCloseDialog}>
            cancelar
          </Button>
          <Button
            onClick={handleDeleteProduct}
            autoFocus
            color="error"
            variant="outlined"
          >
            excluir
          </Button>
        </Dialog.Actions>
      </Dialog.Root>
    </>
  )
}

export { DialogDeleteProduct }

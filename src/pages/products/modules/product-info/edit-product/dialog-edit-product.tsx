import { Theme, alpha, useTheme } from '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import IconButton from '@mui/material/IconButton'
import { ProductsProps } from '@/components/types/products-props'
import { Dialog } from '@/components/ui'
import { COLORS } from '@/styles'
import { useEditProduct } from './useEditProduct'
import { EditProduct } from './index'

type DialogEditProductProps = {
  product: ProductsProps
}

export const DialogEditProduct = ({ product }: DialogEditProductProps) => {
  const { handleOpenDialog, handleCloseDialog, open } = useEditProduct()
  const theme = useTheme()

  return (
    <>
      <IconButton
        onClick={handleOpenDialog}
        sx={{
          color: (theme: Theme) => theme.palette.primary.contrastText,

          ':hover': {
            background: alpha(COLORS.zinc[50], 0.3),
          },
        }}
      >
        <BorderColorIcon />
      </IconButton>
      <Dialog.Root
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Dialog.Header
          id="alert-dialog-title"
          title={`Atualizar ${product.name}`}
        />

        <Dialog.Content
          sx={{
            '& form': {
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(2),
            },
          }}
        >
          <EditProduct />
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}

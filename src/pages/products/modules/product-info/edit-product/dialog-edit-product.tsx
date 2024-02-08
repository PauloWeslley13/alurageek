import { alpha, useTheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import CloseIcon from '@mui/icons-material/Close'
import { ProductsProps } from '@/components/types/products-props'
import { Dialog } from '@/components/ui'
import { COLORS } from '@/styles'
import { useEditProduct } from './useEditProduct'
import { EditProduct } from './index'

type DialogEditProductProps = {
  product: ProductsProps
}

export const DialogEditProduct = ({ product }: DialogEditProductProps) => {
  const { handleOpenDialog, handleCloseDialog, open } = useEditProduct({
    product,
  })
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
        <BorderColorIcon />
      </IconButton>
      <Dialog.Root
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Dialog.Header id="alert-dialog-title" title={product.name}>
          <IconButton onClick={handleCloseDialog}>
            <CloseIcon sx={{ color: theme.palette.grey[600] }} />
          </IconButton>
        </Dialog.Header>

        <Dialog.Content
          sx={{
            width: '500px',
            '& form': {
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(2),
            },
          }}
        >
          <EditProduct product={product} />
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}

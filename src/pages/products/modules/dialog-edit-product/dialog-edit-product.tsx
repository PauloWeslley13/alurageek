import { alpha, useTheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import CloseIcon from '@mui/icons-material/Close'
import { ProductsProps } from '@/components/types/products-props'
import { useEditProduct } from './useEditProduct'
import { Dialog, Button, InputField } from '@/components/ui'
import { COLORS } from '@/styles'

type DialogEditProductProps = {
  product: ProductsProps
}

export const DialogEditProduct = ({ product }: DialogEditProductProps) => {
  const {
    handleOpenDialog,
    handleCloseDialog,
    open,
    errors,
    register,
    handleSubmit,
    updatedProduct,
  } = useEditProduct({
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
          <form onSubmit={handleSubmit(updatedProduct)} autoComplete="off">
            <InputField
              {...register('url')}
              type="text"
              label="URL de imagen"
              placeholder="Informe a URL"
              error={!!errors.url?.message}
              helperText={errors.url?.message}
            />
            <InputField
              {...register('category')}
              type="text"
              label="Categoría"
              placeholder="Informe a categoría"
              error={!!errors.category?.message}
              helperText={errors.category?.message}
            />
            <InputField
              {...register('name')}
              type="text"
              label="Nombre del producto"
              placeholder="Informe a nombre del producto"
              error={!!errors.name?.message}
              helperText={errors.name?.message}
            />
            <InputField
              {...register('price')}
              type="text"
              label="Precio del produtco"
              placeholder="Informe a precio del produtco"
              error={!!errors.price?.message}
              helperText={errors.price?.message}
            />
            <InputField
              {...register('description')}
              type="text"
              label="Descripción del producto"
              placeholder="Informe a descripción del producto"
              error={!!errors.description?.message}
              helperText={errors.description?.message}
            />

            <Button
              label="Atualizar"
              type="submit"
              onClick={handleCloseDialog}
              sx={{
                alignSelf: 'center',
                background: theme.palette.primary.main,
                color: theme.palette.common.white,
                width: theme.spacing(40),
                height: theme.spacing(12),
              }}
            />
          </form>
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}

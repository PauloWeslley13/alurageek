import { useTheme } from '@mui/material'
import { Button, InputField } from '@/components/ui'
import { EditProductProps } from './edit-product-props'
import { useEditProduct } from './useEditProduct'

export const EditProduct = ({ product }: EditProductProps) => {
  const { errors, register, handleSubmit, updatedProduct } = useEditProduct({
    product,
  })
  const theme = useTheme()

  return (
    <form onSubmit={handleSubmit(updatedProduct)}>
      <InputField
        {...register('url')}
        type="text"
        label="URL de imagen"
        placeholder="Informe a URL"
        error={!!errors.url?.message}
        helperText={errors.url?.message}
      />
      <InputField
        {...register('categoria')}
        type="text"
        label="Categoría"
        placeholder="Informe a categoría"
        error={!!errors.categoria?.message}
        helperText={errors.categoria?.message}
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
        label="Cadastrar"
        type="submit"
        sx={{
          alignSelf: 'center',
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
          width: theme.spacing(40),
          height: theme.spacing(12),
        }}
      />
    </form>
  )
}

import { useTheme } from '@mui/material'
import { Button, InputField } from '@/presenter/components/ui'
import { useCreateProduct } from './useCreateProduct'

export const FormCreateProduct = () => {
  const { errors, register, handleSubmit, createdProduct } = useCreateProduct()
  const theme = useTheme()

  return (
    <form onSubmit={handleSubmit(createdProduct)}>
      <InputField
        {...register('url')}
        type="text"
        label="URL de imagem"
        placeholder="Informe a URL"
        error={!!errors.url?.message}
        helperText={errors.url?.message}
      />
      <InputField
        {...register('category')}
        type="text"
        label="Categoria"
        placeholder="Informe a categoria"
        error={!!errors.category?.message}
        helperText={errors.category?.message}
      />
      <InputField
        {...register('name')}
        type="text"
        label="Nome do produto"
        placeholder="Informe a nome do produto"
        error={!!errors.name?.message}
        helperText={errors.name?.message}
      />
      <InputField
        {...register('price')}
        type="text"
        label="Preço"
        placeholder="Informe a preço"
        error={!!errors.price?.message}
        helperText={errors.price?.message}
      />
      <InputField
        {...register('description')}
        type="text"
        label="Descrição do produto"
        placeholder="Informe a descrição do produto"
        error={!!errors.description?.message}
        helperText={errors.description?.message}
      />

      <Button
        label="Cadastrar"
        type="submit"
        sx={{
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
          width: theme.spacing(40),
          height: theme.spacing(12),
        }}
      />
    </form>
  )
}

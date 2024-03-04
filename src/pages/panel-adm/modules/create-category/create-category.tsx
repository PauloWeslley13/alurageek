import { useTheme } from '@mui/material'
import { Button, InputField } from '@/components/ui'
import { useCreateCategory } from './useCreateCategory'

export const CreateCategory = () => {
  const { errors, handleSubmit, handleCategoryPOST, register } =
    useCreateCategory()
  const theme = useTheme()

  return (
    <form onSubmit={handleSubmit(handleCategoryPOST)}>
      <InputField
        {...register('name')}
        type="text"
        label="Categoria"
        placeholder="Informe a categoria"
        error={!!errors.name?.message}
        helperText={errors.name?.message}
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

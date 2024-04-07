import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import { InputField } from '@/presenter/components/ui'
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
        variant="primary"
        type="submit"
        sx={{
          alignSelf: 'center',
          width: theme.spacing(40),
          height: theme.spacing(12),
        }}
      >
        Cadastrar
      </Button>
    </form>
  )
}

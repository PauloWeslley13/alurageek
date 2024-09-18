import { Button, MenuItem, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { InputField } from '@/presenter/components/ui'
import { useCreateProduct } from './hook'

export const FormCreateProduct = () => {
  const {
    errors,
    control,
    register,
    handleSubmit,
    handlerCreatedProduct,
    handleFormattedPrice,
    categories,
  } = useCreateProduct()

  return (
    <form onSubmit={handleSubmit(handlerCreatedProduct)}>
      <InputField
        {...register('name')}
        type="text"
        label="Nome"
        placeholder="Informe a nome do produto"
        error={!!errors.name?.message}
        helperText={errors.name?.message}
      />
      <InputField
        {...register('price')}
        type="text"
        label="Preço"
        onBlur={(e) => handleFormattedPrice(e)}
        placeholder="Informe a preço"
        error={!!errors.price?.message}
        helperText={errors.price?.message}
      />
      <InputField
        {...register('description')}
        id="description"
        type="text"
        label="Descrição"
        placeholder="Informe a descrição do produto"
        error={!!errors.description?.message}
        helperText={errors.description?.message}
      />
      <Controller
        name="categoryId"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Categorias"
            variant="filled"
            error={!!errors.categoryId?.message}
            helperText={errors.categoryId?.message}
            size="small"
          >
            <MenuItem value="">
              <em>Selecione uma categoria</em>
            </MenuItem>
            {categories.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <Button type="submit" variant="primary" sx={{ width: 305, height: 50 }}>
        Cadastrar
      </Button>
    </form>
  )
}

import { Button } from '@mui/material'
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import FormControl from '@mui/material/FormControl'
// import Select from '@mui/material/Select'
import { Controller } from 'react-hook-form'
import { ProductModel } from '@/data/models'
import { InputField, Select } from '@/presenter/components/ui'
import { useFormEditProduct } from './hook'
import { useCategoryList } from '@/presenter/hooks/useCategoryList'

type FormEditProductProps = {
  product: ProductModel
  onCloseDialog: () => void
}

export function FormEditProduct({
  product,
  onCloseDialog,
}: FormEditProductProps) {
  const { categories } = useCategoryList()
  const {
    errors,
    control,
    register,
    handleSubmit,
    handleUpdatedProduct,
    handleFormattedPrice,
  } = useFormEditProduct({ product })

  return (
    <form
      onSubmit={handleSubmit((data) =>
        handleUpdatedProduct(data, onCloseDialog),
      )}
    >
      <InputField
        {...register('imageUrl')}
        type="text"
        label="ImageUrl"
        placeholder="Informe a categoria"
      />
      <InputField
        {...register('name')}
        type="text"
        label="Nome do produto"
        placeholder="Informe o nome do produto"
        error={!!errors.name?.message}
        helperText={errors.name?.message}
      />
      <InputField
        {...register('price')}
        type="text"
        label="Preço do produto"
        onBlur={(e) => handleFormattedPrice(e)}
        placeholder="Informe o preço do produto"
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
      <Controller
        name="categoryId"
        control={control}
        render={({ field }) => {
          return (
            <Select
              {...field}
              id="categoryId"
              label="Categoria"
              options={categories}
              placeholder="Selecione uma categoria"
              error={!!errors.categoryId?.message}
              helperText={errors.categoryId?.message}
            />
          )
        }}
      />

      <Button
        type="submit"
        variant="primary"
        sx={{
          alignSelf: 'center',
          width: (theme) => theme.spacing(40),
          height: (theme) => theme.spacing(12),
        }}
      >
        Atualizar
      </Button>
    </form>
  )
}

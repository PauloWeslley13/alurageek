import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Typography, useTheme } from '@mui/material'
import { Button, InputField } from '@/components/ui'
import FONTS from '@/styles/fonts'
import * as S from './create-products-styles'
import {
  SchemaProductProps,
  schemaProduct,
} from '@/components/types/products-props'
import { useAppDispatch } from '@/store/hook/useRedux'
import { createProduct } from '@/store/reducers/products'

export const CreateProduct = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaProductProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaProduct),
  })

  console.log(errors)

  const createdProduct = (data: SchemaProductProps) => {
    console.log(data)
    dispatch(createProduct(data))
    reset()
  }

  return (
    <S.Wrapper>
      <Typography
        component="h2"
        variant="h4"
        sx={{ fontSize: FONTS.fontSizes['3xl'] }}
      >
        Agregar nuevo producto
      </Typography>

      <form onSubmit={handleSubmit(createdProduct)}>
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

        <Button label="Cadastrar" type="submit" sx={S.ButtonStyles(theme)} />
      </form>
    </S.Wrapper>
  )
}

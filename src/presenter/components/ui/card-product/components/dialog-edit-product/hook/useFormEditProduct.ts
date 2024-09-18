import { FocusEvent, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProductProps } from '@/presenter/components/types'
import { ProductModel } from '@/data/models'
import { useAppDispatch } from '@/main/store/hook/useRedux'
import { schemaProduct } from '@/validation'
import { useFormatted } from '@/presenter/hooks/useFormatted'
import { loadProductUpdate } from '@/main/store/ducks/products'

type UseEditProductProps = {
  product: ProductModel
}

export function useFormEditProduct({ product }: UseEditProductProps) {
  const { formatted } = useFormatted()
  const dispatch = useAppDispatch()
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProductProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaProduct),
    defaultValues: {
      name: '',
      description: '',
      price: '',
      categoryId: '',
      imageUrl: '',
    },
  })

  const handlerUpdatedDataFormEditProduct = useCallback(() => {
    setValue('name', product.name)
    setValue('description', product.description)
    setValue('price', product.price.toString())
    setValue('categoryId', product.categoryId)
    setValue('imageUrl', product.imageUrl)
  }, [setValue, product])

  useEffect(() => {
    handlerUpdatedDataFormEditProduct()
  }, [handlerUpdatedDataFormEditProduct])

  function handleFormattedPrice(
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) {
    const priceFormatted = formatted.formatPrice(event.target.value)
    setValue('price', priceFormatted)
  }

  function handleUpdatedProduct(
    params: FormProductProps,
    onCloseDialog: () => void,
  ) {
    const data = {
      id: product.id,
      name: params.name,
      description: params.description,
      price: formatted.formatDecimalValue(params.price),
      categoryId: params.categoryId,
      imageUrl: params?.imageUrl || '',
    }

    dispatch(loadProductUpdate({ ...data }))
    onCloseDialog()
  }

  return {
    errors,
    control,
    register,
    handleSubmit,
    handleUpdatedProduct,
    handleFormattedPrice,
  }
}

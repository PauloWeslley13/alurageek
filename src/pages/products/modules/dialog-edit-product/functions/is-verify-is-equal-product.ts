import {
  ProductsProps,
  SchemaProductProps,
} from '@/components/types/products-props'

type Props = {
  data: SchemaProductProps
  product: ProductsProps
}

export const isVerifyIsEqualProduct = ({ data, product }: Props) => {
  const isEqualProducts =
    data.name === product.name &&
    data.description === product.description &&
    data.price === product.price &&
    data.category === product.category &&
    data.url === product.url

  if (isEqualProducts) {
    return false
  } else {
    return true
  }
}

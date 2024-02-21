import { z } from 'zod'
import { schemaProduct } from '@/pages/products/modules/schema-product'

export type SchemaProductProps = z.infer<typeof schemaProduct>

export type ProductsProps = SchemaProductProps & {
  id: string
}

export type ProductsType = {
  products: ProductsProps[]
  isLoading: boolean
}

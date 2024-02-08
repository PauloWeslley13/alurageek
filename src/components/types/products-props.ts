import { z } from 'zod'
import { schemaProduct } from '@/pages/products/modules/product-info/schema-product'

export type SchemaProductProps = z.infer<typeof schemaProduct>

export type ProductsProps = SchemaProductProps & {
  id: string
}

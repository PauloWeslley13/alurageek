import { ProductModel } from '@/data/models'

export type CartProductProps = Omit<ProductModel, 'id'> & {
  id: string
  quantity: number
}

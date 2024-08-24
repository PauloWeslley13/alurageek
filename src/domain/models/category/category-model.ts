import { ProductModel } from '../product'

export type CategoryModel = {
  id: string
  name: string
  products?: ProductModel[]
}

import { ProductRepository } from '@/domain/product'

export namespace ProductTypes {
  export type Params<T, R> = {
    data: T
    product: R
  }

  export type Data = ProductRepository

  export type DataParams = Omit<ProductRepository, 'id'>

  export type ListDataParams = ProductRepository[]

  export type ReturnPromiseParams = ProductRepository | 'Produto já cadastrado'
}

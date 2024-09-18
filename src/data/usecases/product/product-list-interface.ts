import { ProductModel } from '@/data/models'

export namespace IProductList {
  export type Model = ProductModel
}

export interface IProductList {
  getProductList(): Promise<IProductList.Model[]>
}

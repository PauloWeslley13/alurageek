import { ProductModel } from '@/data/models'

export namespace IProductDetail {
  export type Params = {
    productId: string
  }

  export type Model = ProductModel
}

export interface IProductDetail {
  getProductById(params: IProductDetail.Params): Promise<IProductDetail.Model>
}

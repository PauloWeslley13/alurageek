import { ProductModel } from '@/data/models'
import { FirebaseResponse } from '@/infra/services/firebase'

export namespace IProductCreate {
  export type Params = Omit<ProductModel, 'id'>

  export type Model = FirebaseResponse<ProductModel>
}

export interface IProductCreate {
  createProduct(params: IProductCreate.Params): Promise<IProductCreate.Model>
}

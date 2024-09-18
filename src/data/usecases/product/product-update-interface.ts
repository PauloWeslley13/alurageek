import { ProductModel } from '@/data/models'
import { FirebaseResponse } from '@/infra/services/firebase'

export namespace IProductUpdate {
  export type Params = ProductModel

  export type Model = FirebaseResponse<ProductModel>
}

export interface IProductUpdate {
  updatedProduct(params: IProductUpdate.Params): Promise<IProductUpdate.Model>
}

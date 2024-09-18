import { IProductDelete } from '@/data/usecases'
import { ProductModel } from '@/data/models'
import { ReducerStateType } from '@/main/store/types/reducer-type'

export namespace Product {
  export type StateProps = ReducerStateType & {
    products: ProductModel[] | []
  }

  export type Params = {
    product: ProductModel
  }

  export type DeleteParams = IProductDelete.Params

  export type ErrorParams = ReducerStateType

  export type DetailStateProps = ReducerStateType & {
    product: ProductModel
  }
}

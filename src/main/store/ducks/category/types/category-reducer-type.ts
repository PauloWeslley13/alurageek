import { CategoryModel } from '@/data/models'
import { ReducerStateType } from '@/main/store/types/reducer-type'

export namespace Category {
  export type StateProps = ReducerStateType & {
    categories: CategoryModel[] | []
  }

  export type Params = {
    category: CategoryModel
  }

  export type ErrorParams = ReducerStateType
}

import { CategoryModel } from '@/data/models'
import { FirebaseResponse } from '@/infra/services/firebase'

export namespace ICategoryUpdate {
  export type Params = {
    id: string
    name: string
  }

  export type Model = FirebaseResponse<CategoryModel>
}

export interface ICategoryUpdate {
  updatedCategory(
    params: ICategoryUpdate.Params,
  ): Promise<ICategoryUpdate.Model>
}

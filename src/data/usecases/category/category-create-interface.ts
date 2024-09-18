import { CategoryModel } from '@/data/models'
import { FirebaseResponse } from '@/infra/services/firebase'

export namespace ICategoryCreate {
  export type Params = {
    name: string
  }

  export type Model = FirebaseResponse<CategoryModel>
}

export interface ICategoryCreate {
  createCategory(params: ICategoryCreate.Params): Promise<ICategoryCreate.Model>
}

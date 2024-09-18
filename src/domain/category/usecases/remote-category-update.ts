import { CollectionsType, IFirebase } from '@/infra/services/firebase'
import { ICategoryUpdate } from '@/data/usecases'
import { CategoryFactory } from '@/domain/category'

interface CategoryCreateDependencies {
  database: IFirebase
  collection: CollectionsType
}

export class RemoteCategoryUpdate implements ICategoryUpdate {
  private database: IFirebase
  private collection: CollectionsType

  constructor(protected dependencies: CategoryCreateDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
  }

  async updatedCategory(
    params: ICategoryUpdate.Params,
  ): Promise<ICategoryUpdate.Model> {
    const response = CategoryFactory.updated(this.database, this.collection)
    return await response.save(params)
  }
}

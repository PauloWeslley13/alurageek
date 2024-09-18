import { CollectionsType, IFirebase } from '@/infra/services/firebase'
import { ICategoryCreate } from '@/data/usecases'
import { CategoryFactory } from '@/domain/category'

interface CategoryCreateDependencies {
  database: IFirebase
  collection: CollectionsType
}

export class RemoteCategoryCreate implements ICategoryCreate {
  private database: IFirebase
  private collection: CollectionsType

  constructor(protected dependencies: CategoryCreateDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
  }

  async createCategory(
    params: ICategoryCreate.Params,
  ): Promise<ICategoryCreate.Model> {
    const response = CategoryFactory.created(this.database, this.collection)
    return await response.save(params)
  }
}

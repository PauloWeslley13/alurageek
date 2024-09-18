import { CollectionsType, IFirebase } from '@/infra/services/firebase'
import { IProductCreate } from '@/data/usecases'
import { ProductFactory } from '@/domain/product'

interface RemoteProductCreateDependencies {
  database: IFirebase
  collection: CollectionsType
}

export class RemoteProductCreate implements IProductCreate {
  private database: IFirebase
  private collection: CollectionsType

  constructor(protected dependencies: RemoteProductCreateDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
  }

  async createProduct(
    params: IProductCreate.Params,
  ): Promise<IProductCreate.Model> {
    const response = ProductFactory.created(this.database, this.collection)
    return await response.save(params)
  }
}

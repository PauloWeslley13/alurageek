import { CollectionsType, IFirebase } from '@/infra/services/firebase'
import { IProductUpdate } from '@/data/usecases'
import { Product, ProductFactory } from '@/domain/product'

interface RemoteProductUpdateDependencies {
  database: IFirebase
  collection: CollectionsType
}

export class RemoteProductUpdate implements IProductUpdate {
  private database: IFirebase
  private collection: CollectionsType

  constructor(protected dependencies: RemoteProductUpdateDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
  }

  async updatedProduct(
    params: IProductUpdate.Params,
  ): Promise<IProductUpdate.Model> {
    const response = ProductFactory.updated(this.database, this.collection)
    const product = new Product({ ...params })

    return await response.save(product)
  }
}

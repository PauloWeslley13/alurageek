import { ICartSaved } from '@/data/usecases'
import { CollectionsType, IFirebase } from '@/infra/services/firebase'
import { Cart, CartFactory } from '@/domain/cart'

interface RemoteCartDependencies {
  database: IFirebase
  collection: CollectionsType
}

export class RemoteCart implements ICartSaved {
  private database: IFirebase
  private collection: CollectionsType

  constructor(protected readonly dependencies: RemoteCartDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
  }

  async cartSaved(params: ICartSaved.Params): Promise<ICartSaved.Model> {
    const cart = new Cart({ ...params })
    const response = CartFactory.execute(this.database, this.collection)

    return await response.save(cart)
  }
}

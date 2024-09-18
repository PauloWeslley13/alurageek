import { deleteDoc, doc } from 'firebase/firestore'
import { IProductDelete } from '@/data/usecases'
import { CollectionsType, IFirebase } from '@/infra/services/firebase'

interface RemoteProductDeleteDependencies {
  database: IFirebase
  collection: CollectionsType
}

export class RemoteProductDelete implements IProductDelete {
  private database: IFirebase
  private collection: CollectionsType

  constructor(
    protected readonly dependencies: RemoteProductDeleteDependencies,
  ) {
    this.database = dependencies.database
    this.collection = dependencies.collection
  }

  async deleteProduct(params: IProductDelete.Params): Promise<void> {
    await deleteDoc(
      doc(this.database.getDB(), this.collection, params.productId),
    )
  }
}

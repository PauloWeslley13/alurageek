import { doc, getDoc } from 'firebase/firestore'
import { IFirebase, IFirebaseFindById } from '@/infra/services/firebase'
import { CollectionsType } from '@/infra/services/firebase/collections'

interface RemoteFirebaseFindByIdDependencies {
  database: IFirebase
  collection: CollectionsType
}

export class RemoteFirebaseFindById<R> implements IFirebaseFindById<R> {
  private database: IFirebase
  private collection: CollectionsType

  constructor(
    protected readonly dependencies: RemoteFirebaseFindByIdDependencies,
  ) {
    this.database = dependencies.database
    this.collection = dependencies.collection
  }

  async findById(id: string): Promise<R> {
    const docSnapshot = await getDoc(
      doc(this.database.getDB(), this.collection, id),
    )

    return { ...docSnapshot.data(), id: docSnapshot.id } as R
  }
}

import { doc, setDoc } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'
import {
  COLLECTION,
  CollectionsType,
  FirebaseResponse,
  IFirebase,
} from '@/infra/services/firebase'
import { ICart } from '@/domain/cart'

interface CartRepositoryDependencies {
  database: IFirebase
  collection: CollectionsType
}

export interface ICartRepository {
  save(data: ICart): Promise<FirebaseResponse<ICart>>
}

export class CartRepository implements ICartRepository {
  private database: IFirebase
  private collection: CollectionsType
  private response: FirebaseResponse<ICart>

  constructor(protected readonly dependencies: CartRepositoryDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
    this.response = { data: null, error: null }
  }

  async save(data: ICart): Promise<FirebaseResponse<ICart>> {
    await this.savedCartCheckout(data)
    return this.response
  }

  private async savedCartCheckout(data: ICart): Promise<void> {
    const cartRef = this.database.subCollection({
      id: data.userId,
      path: COLLECTION.users,
      subCollection: this.collection,
    })

    try {
      await setDoc(doc(cartRef), { ...data })
      this.response.data = data
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        this.response.error = error
      }
    }
  }
}

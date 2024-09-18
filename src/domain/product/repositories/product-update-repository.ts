import { FirebaseError } from 'firebase/app'
import { doc, updateDoc } from 'firebase/firestore'
import { ProductModel } from '@/data/models'
import {
  CollectionsType,
  FirebaseResponse,
  IFirebase,
} from '@/infra/services/firebase'
import { IProduct } from '@/domain/product/entities/product'

interface ProductUpdateRepositoryDependencies {
  database: IFirebase
  collection: CollectionsType
}

export interface IProductUpdateRepository {
  save(params: IProduct): Promise<FirebaseResponse<ProductModel>>
}

export class ProductUpdateRepository implements IProductUpdateRepository {
  private response: FirebaseResponse<ProductModel>
  private database: IFirebase
  private collection: CollectionsType

  constructor(protected dependencies: ProductUpdateRepositoryDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
    this.response = { data: null, error: null }
  }

  async save(params: IProduct): Promise<FirebaseResponse<ProductModel>> {
    await this.updateProduct(params)
    return this.response
  }

  private async updateProduct(params: IProduct): Promise<void> {
    const productUpdateDocRef = doc(
      this.database.getDB(),
      this.collection,
      params.id,
    )

    await updateDoc(productUpdateDocRef, { ...params })
      .then(() => {
        this.response.data = { ...params }
      })
      .catch((error: unknown) => {
        if (error instanceof FirebaseError) {
          this.response.error = error
        }
      })
  }
}

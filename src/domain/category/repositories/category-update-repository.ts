import { FirebaseError } from 'firebase/app'
import { doc, updateDoc } from 'firebase/firestore'
import { CategoryModel } from '@/data/models'
import {
  CollectionsType,
  FirebaseResponse,
  IFirebase,
} from '@/infra/services/firebase'
import { ICategory } from '@/domain/category'

interface CategoryUpdateRepositoryDependencies {
  database: IFirebase
  collection: CollectionsType
}

export interface ICategoryUpdateRepository {
  save(params: ICategory): Promise<FirebaseResponse<CategoryModel>>
}

export class CategoryUpdateRepository implements ICategoryUpdateRepository {
  private response: FirebaseResponse<CategoryModel>
  private database: IFirebase
  private collection: CollectionsType

  constructor(
    protected readonly dependencies: CategoryUpdateRepositoryDependencies,
  ) {
    this.database = dependencies.database
    this.collection = dependencies.collection
    this.response = { data: null, error: null }
  }

  async save(params: ICategory): Promise<FirebaseResponse<CategoryModel>> {
    await this.updateProduct(params)
    return this.response
  }

  private async updateProduct(params: ICategory): Promise<void> {
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

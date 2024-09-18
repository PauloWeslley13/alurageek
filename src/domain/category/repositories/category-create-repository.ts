import { FirebaseError } from 'firebase/app'
import { addDoc, DocumentReference } from 'firebase/firestore'
import { CategoryModel } from '@/data/models'
import {
  CollectionsType,
  FirebaseResponse,
  IFirebase,
} from '@/infra/services/firebase'
import { Category } from '@/domain/category/entities/category'

interface CategoryCreateRepositoryDependencies {
  database: IFirebase
  collection: CollectionsType
}

export interface ICategoryCreateRepository {
  save(
    params: Omit<CategoryModel, 'id'>,
  ): Promise<FirebaseResponse<CategoryModel>>
}

export class CategoryCreateRepository implements ICategoryCreateRepository {
  private response: FirebaseResponse<CategoryModel>
  private database: IFirebase
  private collection: CollectionsType

  constructor(
    protected readonly dependencies: CategoryCreateRepositoryDependencies,
  ) {
    this.database = dependencies.database
    this.collection = dependencies.collection
    this.response = { data: null, error: null }
  }

  async save(
    params: Omit<CategoryModel, 'id'>,
  ): Promise<FirebaseResponse<CategoryModel>> {
    await this.createCategory(params)
    return this.response
  }

  private async createCategory(
    params: Omit<CategoryModel, 'id'>,
  ): Promise<void> {
    await addDoc(this.database.collection(this.collection), params)
      .then((data: DocumentReference) => {
        this.response.data = new Category({ ...params, id: data.id })
      })
      .catch((error: unknown) => {
        if (error instanceof FirebaseError) {
          this.response.error = error
        }
      })
  }
}

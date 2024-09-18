import { FirebaseError } from 'firebase/app'
import { addDoc, DocumentReference } from 'firebase/firestore'
import { ProductModel } from '@/data/models'
import {
  CollectionsType,
  FirebaseResponse,
  IFirebase,
} from '@/infra/services/firebase'
import { Product } from '@/domain/product/entities/product'

interface ProductCreateRepositoryDependencies {
  database: IFirebase
  collection: CollectionsType
}

export interface IProductCreateRepository {
  save(
    params: Omit<ProductModel, 'id'>,
  ): Promise<FirebaseResponse<ProductModel>>
}

export class ProductCreateRepository implements IProductCreateRepository {
  private response: FirebaseResponse<ProductModel>
  private database: IFirebase
  private collection: CollectionsType

  constructor(protected dependencies: ProductCreateRepositoryDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
    this.response = { data: null, error: null }
  }

  async save(
    params: Omit<ProductModel, 'id'>,
  ): Promise<FirebaseResponse<ProductModel>> {
    await this.createProduct(params)
    return this.response
  }

  private async createProduct(params: Omit<ProductModel, 'id'>): Promise<void> {
    try {
      const data: DocumentReference = await addDoc(
        this.database.collection(this.collection),
        params,
      )
      this.response.data = new Product({ ...params, id: data.id })
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        this.response.error = error
      }
    }
  }
}

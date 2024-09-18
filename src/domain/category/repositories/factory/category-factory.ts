import { CollectionsType, IFirebase } from '@/infra/services/firebase'
import {
  CategoryCreateRepository,
  ICategoryCreateRepository,
} from '../category-create-repository'
import {
  CategoryUpdateRepository,
  ICategoryUpdateRepository,
} from '../category-update-repository'

export class CategoryFactory {
  static created(
    database: IFirebase,
    collection: CollectionsType,
  ): ICategoryCreateRepository {
    return new CategoryCreateRepository({ database, collection })
  }

  static updated(
    database: IFirebase,
    collection: CollectionsType,
  ): ICategoryUpdateRepository {
    return new CategoryUpdateRepository({ database, collection })
  }
}

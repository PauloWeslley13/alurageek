import { CollectionsType, IFirebase } from '@/infra/services/firebase'
import {
  IProductCreateRepository,
  ProductCreateRepository,
} from '@/domain/product/repositories/product-create-repository'
import {
  IProductUpdateRepository,
  ProductUpdateRepository,
} from '@/domain/product/repositories/product-update-repository'

export class ProductFactory {
  static created(
    database: IFirebase,
    collection: CollectionsType,
  ): IProductCreateRepository {
    return new ProductCreateRepository({ database, collection })
  }

  static updated(
    database: IFirebase,
    collection: CollectionsType,
  ): IProductUpdateRepository {
    return new ProductUpdateRepository({ database, collection })
  }
}

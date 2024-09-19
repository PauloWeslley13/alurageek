import { CollectionsType, IFirebase } from '@/infra/services/firebase'
import {
  CartRepository,
  ICartRepository,
} from '@/domain/cart/repositories/cart-repository'

export class CartFactory {
  static execute(
    database: IFirebase,
    collection: CollectionsType,
  ): ICartRepository {
    return new CartRepository({ database, collection })
  }
}

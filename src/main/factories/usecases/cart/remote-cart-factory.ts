import { makeRemoteDatabase } from '@/main/factories/data'
import { ICartSaved } from '@/data/usecases'
import { RemoteCart } from '@/domain/cart'
import { COLLECTION } from '@/infra/services/firebase'

export const makeRemoteCart = (): ICartSaved => {
  return new RemoteCart({
    database: makeRemoteDatabase(),
    collection: COLLECTION.carts,
  })
}

import { RemoteProductUpdate } from '@/domain/product'
import { IProductUpdate } from '@/data/usecases'
import { COLLECTION } from '@/infra/services/firebase'
import { makeRemoteDatabase } from '@/main/factories/data'

export const makeRemoteProductUpdate = (): IProductUpdate => {
  return new RemoteProductUpdate({
    database: makeRemoteDatabase(),
    collection: COLLECTION.products,
  })
}

import { RemoteProductDelete } from '@/domain/product'
import { IProductDelete } from '@/data/usecases'
import { COLLECTION } from '@/infra/services/firebase'
import { makeRemoteDatabase } from '@/main/factories/data'

export const makeRemoteProductDelete = (): IProductDelete => {
  return new RemoteProductDelete({
    database: makeRemoteDatabase(),
    collection: COLLECTION.products,
  })
}

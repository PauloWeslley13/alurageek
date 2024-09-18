import { RemoteProductCreate } from '@/domain/product'
import { IProductCreate } from '@/data/usecases'
import { COLLECTION } from '@/infra/services/firebase'
import { makeRemoteDatabase } from '@/main/factories/data'

export const makeRemoteProductCreate = (): IProductCreate => {
  return new RemoteProductCreate({
    database: makeRemoteDatabase(),
    collection: COLLECTION.products,
  })
}

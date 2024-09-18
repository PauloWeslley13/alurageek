import { RemoteCategoryUpdate } from '@/domain/category'
import { ICategoryUpdate } from '@/data/usecases'
import { COLLECTION } from '@/infra/services/firebase'
import { makeRemoteDatabase } from '@/main/factories/data'

export const makeRemoteCategoryUpdated = (): ICategoryUpdate => {
  return new RemoteCategoryUpdate({
    database: makeRemoteDatabase(),
    collection: COLLECTION.categories,
  })
}

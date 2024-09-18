import { RemoteCategoryCreate } from '@/domain/category'
import { ICategoryCreate } from '@/data/usecases'
import { COLLECTION } from '@/infra/services/firebase'
import { makeRemoteDatabase } from '@/main/factories/data'

export const makeRemoteCategoryCreate = (): ICategoryCreate => {
  return new RemoteCategoryCreate({
    database: makeRemoteDatabase(),
    collection: COLLECTION.categories,
  })
}

import { RemoteCategoryList } from '@/domain/category'
import { ICategoryList } from '@/data/usecases'
import { makeRemoteDatabase } from '@/main/factories/data'

export const makeRemoteCategoryList = (): ICategoryList => {
  return new RemoteCategoryList({ database: makeRemoteDatabase() })
}

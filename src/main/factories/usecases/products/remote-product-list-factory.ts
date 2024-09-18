import { RemoteProductList } from '@/domain/product'
import { IProductList } from '@/data/usecases'
import { makeRemoteDatabase } from '@/main/factories/data'

export const makeRemoteProductList = (): IProductList => {
  return new RemoteProductList({ database: makeRemoteDatabase() })
}

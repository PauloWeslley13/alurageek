import { RemoteProductDetail } from '@/domain/product'
import { IProductDetail } from '@/data/usecases'
import { makeRemoteFirebaseFindById } from '@/main/factories/data'
import { ProductModel } from '@/data/models'
import { COLLECTION } from '@/infra/services/firebase'

export const makeRemoteProductDetail = (): IProductDetail => {
  return new RemoteProductDetail({
    firestore: makeRemoteFirebaseFindById<ProductModel>(COLLECTION.products),
  })
}

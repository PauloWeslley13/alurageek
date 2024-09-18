import { IFirebaseFindById } from '@/infra/services/firebase'
import { IProductDetail } from '@/data/usecases'

interface RemoteProductDetailDependencies {
  firestore: IFirebaseFindById<IProductDetail.Model>
}

export class RemoteProductDetail implements IProductDetail {
  private firestore: IFirebaseFindById<IProductDetail.Model>

  constructor(protected dependencies: RemoteProductDetailDependencies) {
    this.firestore = dependencies.firestore
  }

  async getProductById(
    params: IProductDetail.Params,
  ): Promise<RemoteProductDetail.Model> {
    return await this.firestore.findById(params.productId)
  }
}

namespace RemoteProductDetail {
  export type Model = IProductDetail.Model
}

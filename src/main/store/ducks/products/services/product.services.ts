import {
  IProductCreate,
  IProductDelete,
  IProductDetail,
  IProductUpdate,
} from '@/data/usecases'
import {
  makeRemoteProductCreate,
  makeRemoteProductDelete,
  makeRemoteProductDetail,
  makeRemoteProductList,
  makeRemoteProductUpdate,
} from '@/main/factories/usecases'

export const productService = {
  post: async (params: IProductCreate.Params) => {
    const product = makeRemoteProductCreate()
    return await product.createProduct(params)
  },
  put: async (params: IProductUpdate.Params) => {
    const product = makeRemoteProductUpdate()
    return await product.updatedProduct(params)
  },
  delete: async (params: IProductDelete.Params) => {
    const product = makeRemoteProductDelete()
    await product.deleteProduct(params)
  },
  getProductById: async (params: IProductDetail.Params) => {
    const product = makeRemoteProductDetail()
    return await product.getProductById(params)
  },
  getProductAll: async () => {
    const product = makeRemoteProductList()
    return await product.getProductList()
  },
}

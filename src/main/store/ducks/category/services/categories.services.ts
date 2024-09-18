import { ICategoryCreate, ICategoryUpdate } from '@/data/usecases'
import {
  makeRemoteCategoryCreate,
  makeRemoteCategoryList,
  makeRemoteCategoryUpdated,
} from '@/main/factories/usecases'

export const categoryServices = {
  post: async (params: ICategoryCreate.Params) => {
    const response = makeRemoteCategoryCreate()
    return await response.createCategory(params)
  },
  put: async (params: ICategoryUpdate.Params) => {
    const response = makeRemoteCategoryUpdated()
    return await response.updatedCategory(params)
  },
  getCategoryAll: async () => {
    const category = makeRemoteCategoryList()
    return await category.getCategoryList()
  },
}

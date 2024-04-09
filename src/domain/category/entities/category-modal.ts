import { CategoryRepository } from '@/domain/category/repositories'
import { CategoryTypes } from '@/domain/category/types'

interface ICategoryModel {
  created(data: CategoryTypes.DataParams): Promise<CategoryRepository>
  updated(data: CategoryRepository): Promise<CategoryRepository>
}

export abstract class CategoryModel implements ICategoryModel {
  async created(data: CategoryTypes.DataParams): Promise<CategoryRepository> {
    return Promise.resolve(data as CategoryRepository)
  }

  async updated(data: CategoryRepository): Promise<CategoryRepository> {
    return Promise.resolve(data as CategoryRepository)
  }
}

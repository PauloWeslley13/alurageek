import { CategoryRepository } from './../repositories'

interface ICategoryModel {
  created(data: Omit<CategoryRepository, 'id'>): Promise<CategoryRepository>
  updated(data: CategoryRepository): Promise<CategoryRepository>
}

export abstract class CategoryModel implements ICategoryModel {
  async created(
    data: Omit<CategoryRepository, 'id'>,
  ): Promise<CategoryRepository> {
    return data as CategoryRepository
  }

  async updated(data: CategoryRepository): Promise<CategoryRepository> {
    return data as CategoryRepository
  }
}

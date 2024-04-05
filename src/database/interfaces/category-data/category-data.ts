import { CategoryRepository } from './../../../domain/category'

interface ICategoryData {
  getCategories(): Promise<CategoryRepository[]>
  getCategoryById(categoryId: string): Promise<CategoryRepository>
}

export type { ICategoryData }

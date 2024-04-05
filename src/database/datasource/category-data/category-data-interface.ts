import { CategoryRepository } from '@/domain/category'

export interface ICategoryData {
  getCategories(): Promise<CategoryRepository[]>
  getCategoryById(categoryId: string): Promise<CategoryRepository>
}

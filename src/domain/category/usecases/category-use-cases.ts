import { CategoryData } from '@/database'
import { Category } from '../entities'
import { CategoryRepository } from '..'

type CreateCategory = CategoryRepository | 'Categoria já cadastrada'

export class CategoryUseCase {
  protected category = new Category()

  async createCategory(
    data: Omit<CategoryRepository, 'id'>,
    categories: CategoryRepository[],
  ): Promise<CreateCategory> {
    const isCategory = categories.findIndex((prod) => prod.name === data.name)

    if (isCategory !== -1) return 'Categoria já cadastrada'

    return await this.category.created({ ...data })
  }

  async updateCategory(data: CategoryRepository): Promise<CategoryRepository> {
    return await this.category.updated({ ...data })
  }

  async getCategories(): Promise<CategoryRepository[]> {
    const data = new CategoryData()
    const response = await data.getCategories()

    return response
  }

  async getCategoryById(categoryId: string): Promise<CategoryRepository> {
    const data = new CategoryData()
    const response = await data.getCategoryById(categoryId)

    return response
  }
}

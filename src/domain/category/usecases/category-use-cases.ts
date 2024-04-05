import { Category } from '../entities/category'
import { CategoryRepository } from '..'
import { CategoryData } from '../../../database'

export class CategoryUseCase {
  protected category = new Category()

  async createCategory(
    data: Omit<CategoryRepository, 'id'>,
    categories: CategoryRepository[],
  ): Promise<CategoryRepository | 'Categoria já cadastrada'> {
    const isCategory = categories.findIndex((prod) => prod.name === data.name)

    if (isCategory !== -1) return 'Categoria já cadastrada'

    return this.category.created({ ...data })
  }

  updateCategory(data: CategoryRepository): Promise<CategoryRepository> {
    return this.category.updated({ ...data })
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

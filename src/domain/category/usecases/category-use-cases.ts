import { CategoryData } from '@/database'
import { Category } from '@/domain/category/entities'
import { CategoryTypes } from '@/domain/category/types'

export class CategoryUseCase {
  protected category = new Category()

  async createCategory(
    data: CategoryTypes.DataParams,
    categories: CategoryTypes.ListDataParams,
  ): Promise<CategoryTypes.ReturnPromiseParams> {
    const isCategory = categories.findIndex((prod) => prod.name === data.name)

    if (isCategory !== -1) return 'Categoria já cadastrada'

    return await this.category.created({ ...data })
  }

  async updateCategory(data: CategoryTypes.Data): Promise<CategoryTypes.Data> {
    return await this.category.updated({ ...data })
  }

  async getCategories(): Promise<CategoryTypes.ListDataParams> {
    const data = new CategoryData()
    const response = await data.getCategories()

    return response
  }

  async getCategoryById(categoryId: string): Promise<CategoryTypes.Data> {
    const data = new CategoryData()
    const response = await data.getCategoryById(categoryId)

    return response
  }
}

import { doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore'
import { CategoryRepository } from './../../../domain/category'
import { DBFactory } from './../../db-factory'
import { COLLECTIONS } from '../../types'

export class CategoryData {
  private database = DBFactory.database()

  async getCategories(): Promise<CategoryRepository[]> {
    const categoriesList: CategoryRepository[] = []

    const filteredCategories = query(
      this.database.getCollection(COLLECTIONS.CATEGORIES),
      where('name', '!=', true),
      orderBy('name', 'asc'),
    )
    const queryCategories = await getDocs(filteredCategories)

    queryCategories.forEach((doc) => {
      categoriesList.push({
        id: doc.id,
        name: doc.data().name,
      } as CategoryRepository)
    })

    return categoriesList
  }

  async getCategoryById(categoryId: string): Promise<CategoryRepository> {
    const responseDoc = await getDoc(
      doc(this.database.getDB(), COLLECTIONS.CATEGORIES, categoryId),
    )
    const data = responseDoc.data() as CategoryRepository

    return data
  }
}

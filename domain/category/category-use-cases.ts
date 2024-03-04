import {
  addDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { Category } from './category'
import { ICategory } from './category-props'
import { collectionCategories } from '../../database/firebase/collections'
import { db } from '../../database/firebase'

export class CategoryUseCase {
  async createCategory(data: Omit<ICategory, 'id'>, categories: ICategory[]) {
    const isCategory = categories.findIndex((prod) => prod.name === data.name)
    let categoryInfo = {} as Category

    if (isCategory !== -1) return

    await addDoc(collectionCategories, { ...data })
      .then((newCategory) => {
        const category = new Category({
          id: newCategory.id,
          name: data.name,
        })

        categoryInfo = category
      })
      .catch((err) => console.log(err))

    return categoryInfo
  }

  updateCategory(data: ICategory): Category {
    const category = new Category({ ...data })
    category.updated()

    return category
  }

  async getCategories(): Promise<ICategory[]> {
    const categoriesList: ICategory[] = []

    const filteredCategories = query(
      collectionCategories,
      where('name', '!=', true),
      orderBy('name', 'asc'),
    )
    const queryCategories = await getDocs(filteredCategories)

    queryCategories.forEach((doc) => {
      categoriesList.push({
        id: doc.id,
        name: doc.data().name,
      } as ICategory)
    })

    return categoriesList
  }

  async getCategoryById(categoryId: string): Promise<ICategory> {
    const categoryDocRef = doc(db, 'categories', categoryId)
    const responseDoc = await getDoc(categoryDocRef)
    const data = responseDoc.data() as ICategory

    return data
  }
}

import { addDoc, doc, updateDoc } from 'firebase/firestore'
import { COLLECTIONS, DBFactory } from '@/database'
import { Factory } from '@/factory'
import { CategoryTypes } from '@/domain/category/types'
import { CategoryModel } from './category-modal'
import { CategoryRepository } from '..'

// ENTIDADE Category
export class Category implements CategoryModel {
  protected category: CategoryRepository = {} as CategoryRepository
  protected database = DBFactory.database()
  protected categoryBuild: Factory.CategoryFactory =
    new Factory.CategoryFactory()

  async created(data: CategoryTypes.DataParams): Promise<CategoryRepository> {
    await addDoc(this.database.getCollection(COLLECTIONS.CATEGORIES), {
      ...data,
    })
      .then((newCategory) => {
        const category = this.categoryBuild.add({
          id: newCategory.id,
          name: data.name,
        })

        this.category = category
      })
      .catch((err) => console.log(err))

    return this.category
  }

  async updated(data: CategoryRepository): Promise<CategoryRepository> {
    this.category = data

    await updateDoc(
      doc(this.database.getDB(), COLLECTIONS.CATEGORIES, data.id),
      { name: data.name },
    )

    return this.category
  }
}

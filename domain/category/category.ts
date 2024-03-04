import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../database/firebase'
import { ICategory } from './category-props'

// ? ENTIDADE Category
export class Category {
  public id: string
  public name: string

  constructor(props: ICategory) {
    this.id = props.id
    this.name = props.name
  }

  async updated() {
    const productUpdateRef = doc(db, 'products', this.id)

    await updateDoc(productUpdateRef, { name: this.name })
  }
}

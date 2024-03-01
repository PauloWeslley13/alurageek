import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { IProduct } from './product-props'
import { db } from '../../database/firebase'

// TODO: ENTIDADE Product
export class Product {
  public id: string
  public name: string
  public description: string
  public price: string
  public category: string
  public url: string

  constructor(props: IProduct) {
    this.id = props.id
    this.name = props.name
    this.description = props.description
    this.price = props.price
    this.category = props.category
    this.url = props.url
  }

  async updated() {
    const productUpdateRef = doc(db, 'products', this.id)

    await updateDoc(productUpdateRef, {
      name: this.name,
      description: this.description,
      price: this.price,
      category: this.category,
      url: this.url,
    })
  }

  async remove() {
    const productRemoveRef = doc(db, 'products', this.id)
    await deleteDoc(productRemoveRef)
  }
}

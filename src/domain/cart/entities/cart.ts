import { deleteDoc, doc, setDoc } from 'firebase/firestore'
import { CartRepository } from '..'
import { CartModel } from './cart-model'
import { COLLECTIONS, DBFactory } from '../../../database'
import { Factory } from '../../../factory'

// ENTIDADE Cart
export class Cart implements CartModel {
  protected category: CartRepository = {} as CartRepository
  protected database = DBFactory.database()
  protected categoryBuild: Factory.CartFactory = new Factory.CartFactory()

  async create(data: CartRepository) {
    const cartRef = doc(this.database.getDB(), COLLECTIONS.CARTS, data.userId)
    await setDoc(cartRef, { ...data })
  }

  async savedCart(data: CartRepository) {
    const cartUserRef = this.database.collection({
      path: COLLECTIONS.USERS,
      id: data.userId,
      collections: COLLECTIONS.CARTS,
    })
    await setDoc(doc(cartUserRef), { ...data })
  }

  async removeCart({ userId }: CartRepository) {
    await deleteDoc(doc(this.database.getDB(), COLLECTIONS.CARTS, userId))
  }
}

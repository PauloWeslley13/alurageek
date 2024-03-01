import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../database/firebase'
import { ICart } from './cart-props'

// ? ENTIDADE Cart
export class Cart {
  public userId: string
  public cart: { id: string; quantity: number }[]
  public totalPrice: number

  constructor(userId: string, props: ICart) {
    this.userId = userId
    this.cart = props.data
    this.totalPrice = props.totalPrice
  }

  async create() {
    const cartRef = doc(db, 'carts', this.userId)
    await setDoc(cartRef, {
      userId: this.userId,
      cart: this.cart,
      totalPrice: this.totalPrice,
    })
  }
}

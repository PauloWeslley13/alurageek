import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { toasts } from './../../src/components/ui/toasts/toasts'
import { ICart, IUserCart, IUserCartSaved } from './cart-props'
import { Cart } from './cart'
import { db } from '../../database/firebase'

export class CartUseCase {
  createCart(userId: string, carts: ICart) {
    const cart = new Cart(userId, carts)

    if (carts.data.length === 0) {
      toasts.warn({ title: 'Não foi possível finaliza a compra' })
    } else {
      toasts.success({ title: 'Compra finalizada' })
      cart.create()
    }
  }

  savedUserCart(userId: string, carts: ICart) {
    const cartSaved = new Cart(userId, carts)

    cartSaved.savedCart()
  }

  removeCart(userId: string, carts: ICart) {
    const cartSaved = new Cart(userId, carts)

    cartSaved.removeCart()
  }

  async getCartByUserId(userId: string) {
    const cartRef = doc(db, 'carts', userId)
    const snapCart = await getDoc(cartRef)
    const cart = snapCart.data() as IUserCart

    return cart
  }

  async getCartByUserIdSaved(userId: string) {
    const userCartList: IUserCartSaved[] = []

    const userCartRef = collection(db, 'users', userId, 'carts')
    const filteredUserCart = query(userCartRef, where('userId', '==', userId))
    const queryUserCart = await getDocs(filteredUserCart)

    queryUserCart.forEach((doc) => {
      userCartList.push({
        id: doc.id,
        data: doc.data().data,
        totalPrice: doc.data().totalPrice,
        userId: doc.data().userId,
      } as IUserCartSaved)
    })

    return userCartList
  }
}

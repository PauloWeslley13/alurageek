import { getDocs, query, where } from 'firebase/firestore'
import { collectionCarts } from '@/config/firebase/collections'
import { CartType } from '@/components/types'

const cartService = {
  get: async (userId: string) => {
    const cartList: CartType[] = []
    const allCart = query(collectionCarts, where('userId', '==', userId))
    const carts = await getDocs(allCart)

    carts.forEach((doc) => {
      cartList.push({
        id: doc.id,
        data: doc.data().data,
        totalPrice: doc.data().totalPrice,
        userId: doc.data().userId,
      } as CartType)
    })

    const dataCart = cartList.find((cart) => cart.userId === userId)

    return dataCart
  },
}

export default cartService

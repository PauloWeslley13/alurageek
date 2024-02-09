import { getDocs, orderBy, query, where } from 'firebase/firestore'
import { CartType } from '@/components/types'
import { collectionCarts } from '@/config/firebase/collections'

const cartService = {
  get: async () => {
    const cart: CartType[] = []

    const getAllCart = query(
      collectionCarts,
      where('totalPrice', '!=', true),
      orderBy('totalPrice', 'asc'),
    )

    const queryCart = await getDocs(getAllCart)

    queryCart.forEach((doc) => {
      cart.push({
        id: doc.id,
        userId: doc.data().userId,
        data: doc.data().data,
        totalPrice: doc.data().totalPrice,
      } as CartType)
    })

    return cart
  },
}

export default cartService

import { doc, getDoc } from 'firebase/firestore'
import { CartType } from '@/components/types'
import { db } from '@/config/firebase'

const cartService = {
  get: async (userId: string) => {
    const cartRef = doc(db, 'carts', userId)
    const snapCart = await getDoc(cartRef)
    const cart = snapCart.data() as CartType

    return cart
  },
}

export default cartService

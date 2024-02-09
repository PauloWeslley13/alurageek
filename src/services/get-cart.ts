import { doc, getDoc } from 'firebase/firestore'
import { CartType } from '@/components/types'
import { collectionCarts } from '@/config/firebase/collections'

const cartService = {
  get: async (uid: string) => {
    const docRef = doc(collectionCarts, uid)
    const responseDoc = await getDoc(docRef)
    const data = responseDoc.data() as CartType

    console.log('função de buscar o carinho ==> ', data)

    return data
  },
}

export default cartService

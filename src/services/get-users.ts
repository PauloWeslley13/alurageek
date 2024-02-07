import { doc, getDoc } from 'firebase/firestore'
import { collectionUser } from '@/config/firebase/collections'
import { UsersProps } from '@/components/types/users-props'

const usersService = {
  get: async (uid: string) => {
    const docRef = doc(collectionUser, uid)
    const responseDoc = await getDoc(docRef)
    const data = responseDoc.data() as UsersProps

    return data
  },
}

export default usersService

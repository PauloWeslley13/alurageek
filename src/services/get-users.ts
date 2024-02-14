import { doc, getDoc } from 'firebase/firestore'
import { UsersProps } from '@/components/types/users-props'
import { db } from '@/config/firebase'

const usersService = {
  get: async (uid: string) => {
    const userDocRef = doc(db, 'users', uid)
    const responseDoc = await getDoc(userDocRef)
    const data = responseDoc.data() as UsersProps

    return data
  },
}

export default usersService

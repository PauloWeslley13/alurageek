import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../database/firebase'
import { IUserProps } from '../user-props'

export class UserRepository {
  async getUser(uid: string): Promise<IUserProps> {
    const userDocRef = doc(db, 'users', uid)
    const responseDoc = await getDoc(userDocRef)
    const data = responseDoc.data() as IUserProps

    return data
  }
}

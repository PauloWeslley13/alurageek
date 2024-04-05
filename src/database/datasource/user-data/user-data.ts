import { doc, getDoc } from 'firebase/firestore'
import { UserRepository } from '@/domain/user'
import { DBFactory } from '@/database/db-factory'
import { COLLECTIONS } from '@/database/types'
import { IUserData } from './user-data-interface'

export class UserData implements IUserData {
  private database = DBFactory.database()

  async getUserLoggedById(uid: string): Promise<UserRepository> {
    const responseDoc = await getDoc(
      doc(this.database.getDB(), COLLECTIONS.USERS, uid),
    )

    const data = responseDoc.data() as UserRepository

    const userLogged = {
      username: data.username,
      email: data.email,
      photoUrl: data.photoUrl,
      accessToken: data.accessToken,
    } as UserRepository

    return userLogged
  }
}

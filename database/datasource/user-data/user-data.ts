import { doc, getDoc } from 'firebase/firestore'
import { DBFactory } from './../../db-factory'
import { UserRepository } from './../../../domain/user/repositories'
import { COLLECTIONS } from '../../types'

export class UserData {
  private database = DBFactory.database()

  async getUserLoggedById(uid: string): Promise<UserRepository> {
    const userDocRef = doc(this.database.getDB(), COLLECTIONS.USERS, uid)
    const responseDoc = await getDoc(userDocRef)
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

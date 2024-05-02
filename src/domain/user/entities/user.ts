/* eslint-disable prettier/prettier */
import { updateProfile, UserCredential } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { UserRepository } from '@/domain/user'
import { COLLECTIONS, DBFactory } from '@/database'
import { IUserModel } from './user-model'

// TODO: ENTIDADE User
export class User implements IUserModel {
  private database = DBFactory.database()

  constructor(private user: UserRepository) { }

  async create(userAuth: UserCredential): Promise<IUserModel.Result> {
    const userRef = doc(
      this.database.getCollection(COLLECTIONS.USERS),
      userAuth.user.uid,
    )

    userAuth.user.getIdToken().then((token) => {
      this.user.accessToken = token
    })

    await updateProfile(userAuth.user, {
      displayName: this.user.username,
      photoURL: this.user.photoUrl,
    })

    await setDoc(userRef, {
      username: this.user.username,
      email: this.user.email,
      password: this.user.password,
      photoUrl: this.user.photoUrl,
      accessToken: this.user.accessToken,
    })

    return this.user

  }
}

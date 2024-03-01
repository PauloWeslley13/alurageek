import { FirebaseError } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { UserRepository } from './repositories/user-repository'
import { User } from './user'
import { auth } from '../../database/firebase'
import { IUserProps } from './user-props'

const userAuth = new UserRepository()

export class UserUseCase {
  async userAuthCreate(data: Omit<IUserProps, 'id'>) {
    const authResponse = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    )

    const userAuth = new User({ id: authResponse.user.uid, ...data })

    userAuth.create(authResponse)

    return userAuth
  }

  async userAuthentication(user: Pick<IUserProps, 'email' | 'password'>) {
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password,
      )

      const userAuth = new User({
        id: data.user.uid,
        email: user.email,
        password: user.password,
        photoUrl: data.user.photoURL!,
        username: data.user.displayName!,
      })

      return userAuth
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        if (err.code === 'auth/invalid-credential') {
          return 'Usuário inválido'
        }
      }
    }
  }

  async userLogout() {
    await signOut(auth)
  }

  userById(uid: string) {
    const user = userAuth.getUser(uid)
    return user
  }
}

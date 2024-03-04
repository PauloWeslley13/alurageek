import { FirebaseError } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { User } from './user'
import { auth, db } from '../../database/firebase'
import { IUserProps } from './user-props'
import { doc, getDoc } from 'firebase/firestore'

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

  async userById(uid: string): Promise<IUserProps> {
    const userDocRef = doc(db, 'users', uid)
    const responseDoc = await getDoc(userDocRef)
    const data = responseDoc.data() as IUserProps

    return data
  }
}

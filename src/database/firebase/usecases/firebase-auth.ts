import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth'
import { IFirebaseAuth } from '../interfaces'

export class FirebaseAuth implements IFirebaseAuth {
  async signUp(
    auth: Auth,
    email: string,
    password: string,
  ): Promise<UserCredential> {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    return response
  }

  async signIn(
    auth: Auth,
    email: string,
    password: string,
  ): Promise<UserCredential> {
    const response = await signInWithEmailAndPassword(auth, email, password)
    return response
  }

  async signOut(auth: Auth): Promise<void> {
    await signOut(auth)
  }
}

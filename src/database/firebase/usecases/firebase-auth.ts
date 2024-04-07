import {
  Auth,
  signOut,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { IFirebaseAuth } from '../interfaces'

export class FirebaseAuth implements IFirebaseAuth<UserCredential, Auth> {
  async createUserWithEmailAndPassword(
    auth: Auth,
    email: string,
    password: string,
  ): Promise<UserCredential> {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    return response
  }

  async signInWithEmailAndPassword(
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

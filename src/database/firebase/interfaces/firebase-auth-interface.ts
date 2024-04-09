import { Auth, UserCredential } from 'firebase/auth'

export interface IFirebaseAuth {
  createUserWithEmailAndPassword(
    auth: Auth,
    email: string,
    password: string,
  ): Promise<UserCredential>
  signInWithEmailAndPassword(
    auth: Auth,
    email: string,
    password: string,
  ): Promise<UserCredential>
  signOut(auth: Auth): Promise<void>
}

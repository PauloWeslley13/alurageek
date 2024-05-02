import { Auth, UserCredential } from 'firebase/auth'

export interface IFirebaseAuth {
  signUp(auth: Auth, email: string, password: string): Promise<UserCredential>
  signIn(auth: Auth, email: string, password: string): Promise<UserCredential>
  signOut(auth: Auth): Promise<void>
}

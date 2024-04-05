import { UserCredential } from 'firebase/auth'

interface IAuthentication {
  signUp(email: string, password: string): Promise<UserCredential>
  signIn(email: string, password: string): Promise<UserCredential>
  signOut(): Promise<void>
}

export type { IAuthentication }

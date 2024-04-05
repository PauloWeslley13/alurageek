import { UserCredential } from 'firebase/auth'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface IAuthentication {
  signUp(params: AuthenticationParams): Promise<UserCredential>
  signIn(params: AuthenticationParams): Promise<UserCredential>
  signOut(): Promise<void>
}

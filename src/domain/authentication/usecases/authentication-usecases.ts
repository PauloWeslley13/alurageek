import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { AuthenticationParams, IAuthentication } from '../interfaces'
import { DBFactory } from '@/database'

export class AuthenticationUseCase implements IAuthentication {
  protected database = DBFactory.database()

  async signUp(params: AuthenticationParams): Promise<UserCredential> {
    const { email, password } = params
    const response = await createUserWithEmailAndPassword(
      this.database.auth(),
      email,
      password,
    )

    return response
  }

  async signIn(params: AuthenticationParams): Promise<UserCredential> {
    const { email, password } = params
    const response = await signInWithEmailAndPassword(
      this.database.auth(),
      email,
      password,
    )

    return response
  }

  async signOut(): Promise<void> {
    await signOut(this.database.auth())
  }
}

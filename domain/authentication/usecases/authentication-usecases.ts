import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { IAuthentication } from '../interfaces'
import { DBFactory } from './../../../database'

export class AuthenticationUseCase implements IAuthentication {
  protected database = DBFactory.database()

  async signUp(email: string, password: string): Promise<UserCredential> {
    const response = await createUserWithEmailAndPassword(
      this.database.auth(),
      email,
      password,
    )

    return response
  }

  async signIn(email: string, password: string): Promise<UserCredential> {
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

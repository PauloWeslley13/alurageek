import { UserCredential } from 'firebase/auth'
import { AuthenticationParams, IAuthentication } from '../interfaces'
import { DBFactory } from '@/database'

export class Authentication implements IAuthentication<UserCredential> {
  protected database = DBFactory.database()
  protected authentication = DBFactory.auth()

  async signUp(params: AuthenticationParams): Promise<UserCredential> {
    const { email, password } = params
    const response = await this.authentication.createUserWithEmailAndPassword(
      this.database.auth(),
      email,
      password,
    )

    return response
  }

  async signIn(params: AuthenticationParams): Promise<UserCredential> {
    const { email, password } = params
    const response = await this.authentication.signInWithEmailAndPassword(
      this.database.auth(),
      email,
      password,
    )

    return response
  }

  async signOut(): Promise<void> {
    await this.authentication.signOut(this.database.auth())
  }
}

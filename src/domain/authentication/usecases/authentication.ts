import { IAuthentication } from '../interfaces'
import { DBFactory } from '@/database'

export class Authentication implements IAuthentication<IAuthentication.Model> {
  protected database = DBFactory.database()
  protected authentication = DBFactory.auth()

  async signUp(params: IAuthentication.Params): Promise<IAuthentication.Model> {
    const { email, password } = params
    const response = await this.authentication.signUp(
      this.database.auth(),
      email,
      password,
    )

    return response
  }

  async signIn(params: IAuthentication.Params): Promise<IAuthentication.Model> {
    const { email, password } = params
    const response = await this.authentication.signIn(
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

import { AuthenticationParams, IAuthentication } from '../interfaces'

export class AuthenticationSpy<T> implements IAuthentication<T> {
  user?: T
  params?: AuthenticationParams

  async signUp(params: AuthenticationParams): Promise<T> {
    this.params = params
    return Promise.resolve(this.user!)
  }

  async signIn(params: AuthenticationParams): Promise<T> {
    this.params = params
    return Promise.resolve(this.user!)
  }

  async signOut(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

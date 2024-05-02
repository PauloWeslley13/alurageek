import { UserCredential } from 'firebase/auth'
export namespace IAuthentication {
  export type Params = {
    email: string
    password: string
  }

  export type Model = UserCredential
}

export interface IAuthentication<T> {
  signUp(params: IAuthentication.Params): Promise<T>
  signIn(params: IAuthentication.Params): Promise<T>
  signOut(): Promise<void>
}

export type AuthenticationParams = {
  email: string
  password: string
}

export interface IAuthentication<T> {
  signUp(params: AuthenticationParams): Promise<T>
  signIn(params: AuthenticationParams): Promise<T>
  signOut(): Promise<void>
}

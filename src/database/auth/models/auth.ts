export type AuthClientParams<T> = {
  auth: T
  email: string
  password: string
}

export interface IAuthSignUp<T, R> {
  createUserWithEmailAndPassword(params: T): Promise<R>
}

export interface IAuthSignIn<T, R> {
  signInWithEmailAndPassword(params: T): Promise<R>
}

export interface ILogout {
  signOut(): Promise<void>
}

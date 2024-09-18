import { IFirebaseAuth } from '@/infra/services/firebase'

export namespace IFirebaseAuthSignIn {
  export type Params = IFirebaseAuth.Params

  export type Model<T> = IFirebaseAuth.Model<T>
}

export interface IFirebaseAuthSignIn<R> {
  authSignIn(params: IFirebaseAuthSignIn.Params): Promise<R>
}

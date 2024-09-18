import { IFirebaseAuth } from '@/infra/services/firebase'

export namespace IFirebaseAuthSignUp {
  export type Params = IFirebaseAuth.Params

  export type Model<T> = IFirebaseAuth.Model<T>
}

export interface IFirebaseAuthSignUp<R> {
  authSignUp(params: IFirebaseAuthSignUp.Params): Promise<R>
}

import { FirebaseError } from 'firebase/app'
import { UserCredential } from 'firebase/auth'
import { IFirebaseAuth } from '@/infra/services/firebase'

export namespace IAddAccount {
  export type Params = IFirebaseAuth.Params & {
    username: string
    photoUrl: string
  }

  export type Model = {
    data: UserCredential | null
    error: FirebaseError | null
  }
}

export interface IAddAccount {
  register(params: IAddAccount.Params): Promise<IAddAccount.Model>
}

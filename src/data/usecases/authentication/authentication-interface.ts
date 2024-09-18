import { FirebaseError } from 'firebase/app'
import { IFirebaseAuth } from '@/infra/services/firebase'
import { AccountModel } from '@/data/models'

export namespace IAuthentication {
  export type Params = IFirebaseAuth.Params

  export type Model = {
    data: AccountModel
    error: FirebaseError | null
  }
}

export interface IAuthentication {
  authentication(params: IAuthentication.Params): Promise<IAuthentication.Model>
}

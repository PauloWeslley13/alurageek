import { UserCredential } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { AccountModel } from '@/data/models'

export namespace IUserCreate {
  export type Params = {
    credential: UserCredential | null
    username: string
    photoUrl: string
  }

  export type Model = {
    data: AccountModel | null
    error: FirebaseError | null | string
  }
}

export interface IUserCreate {
  create(params: IUserCreate.Params): Promise<IUserCreate.Model>
}

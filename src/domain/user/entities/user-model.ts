import { UserCredential } from 'firebase/auth'
import { UserRepository } from '@/domain/user'

export namespace IUserModel {
  export type Result = UserRepository
}

export interface IUserModel {
  create(userAuth: UserCredential): Promise<IUserModel.Result>
}

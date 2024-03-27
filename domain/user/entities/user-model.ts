import { UserCredential } from 'firebase/auth'
import { UserRepository } from '../repositories'

interface IUserModel {
  create(userAuth: UserCredential): Promise<
    | 'Email já cadastrado'
    | 'Ops! Aconteceu um erro inesperado'
    | {
        user: UserRepository
        message: string
      }
  >
}

export type { IUserModel }

import { UserCredential } from 'firebase/auth'
import { UserRepository } from '../repositories'

type Create =
  | 'Email já cadastrado'
  | 'Ops! Aconteceu um erro inesperado'
  | { user: UserRepository; message: string }

interface IUserModel {
  create(userAuth: UserCredential): Promise<Create>
}

export type { IUserModel, Create }

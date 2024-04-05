import { UserCredential } from 'firebase/auth'
import { UserRepository } from '../repositories'

export namespace Create {
  export type Props =
    | 'Email já cadastrado'
    | 'Ops! Aconteceu um erro inesperado'
    | { user: UserRepository; message: string }
}

export interface IUserModel {
  create(userAuth: UserCredential): Promise<Create.Props>
}

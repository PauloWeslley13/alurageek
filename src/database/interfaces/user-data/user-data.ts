import { UserRepository } from './../../../domain/user'

interface IUserData {
  getUserLoggedById(uid: string): Promise<UserRepository>
}

export type { IUserData }

import { UserRepository } from '@/domain/user'

export interface IUserData {
  getUserLoggedById(uid: string): Promise<UserRepository>
}

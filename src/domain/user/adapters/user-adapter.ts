import { User, UserRepository } from '@/domain/user'

export const userAdapter = (data: UserRepository): User => new User(data)

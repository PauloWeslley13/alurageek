import { User } from '../entities'
import { UserRepository } from '../repositories'

interface IUserBuilder {
  create(data: UserRepository): User
}

export class UserBuilder implements IUserBuilder {
  create(data: UserRepository): User {
    return new User(data)
  }
}

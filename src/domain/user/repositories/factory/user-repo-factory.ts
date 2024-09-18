import { IFirebase } from '@/infra/services/firebase'
import {
  IUserRepository,
  UserRepository,
} from '@/domain/user/repositories/user-repo'

export class UserFactory {
  static executeCreate(database: IFirebase): IUserRepository {
    return new UserRepository(database)
  }
}

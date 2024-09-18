import { IFirebase } from '@/infra/services/firebase'
import { IUserCreate } from '@/data/usecases'
import { User } from '@/domain/user/entities/user'
import { UserFactory } from '@/domain/user/repositories'

interface RemoteCreateUserDependencies {
  database: IFirebase
}

export class RemoteUserCreate implements IUserCreate {
  private database: IFirebase

  constructor(protected dependencies: RemoteCreateUserDependencies) {
    this.database = dependencies.database
  }

  async create({
    credential,
    username,
    photoUrl,
  }: IUserCreate.Params): Promise<RemoteUserCreate.Model> {
    const user = new User({
      id: credential?.user.uid || '',
      email: credential?.user.email || '',
      username,
      photoUrl,
    })

    const response = UserFactory.executeCreate(this.database)

    return await response.save(credential, user)
  }
}

namespace RemoteUserCreate {
  export type Model = IUserCreate.Model
}

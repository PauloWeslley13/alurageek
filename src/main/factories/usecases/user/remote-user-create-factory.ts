import { IUserCreate } from '@/data/usecases'
import { RemoteUserCreate } from '@/domain/user'
import { makeRemoteDatabase } from '@/main/factories/data'

export const makeRemoteUserCreate = (): IUserCreate => {
  return new RemoteUserCreate({ database: makeRemoteDatabase() })
}

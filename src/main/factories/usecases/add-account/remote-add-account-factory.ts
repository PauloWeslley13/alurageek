import { RemoteAddAccount } from '@/domain/add-account'
import { IAddAccount } from '@/data/usecases'
import { makeRemoteDatabaseAuthSignUp } from '@/main/factories/data'

export const makeRemoteAddAccount = (): IAddAccount => {
  return new RemoteAddAccount({
    auth: makeRemoteDatabaseAuthSignUp(),
  })
}

import { RemoteAuthentication } from '@/domain/authentication'
import { IAuthentication } from '@/data/usecases'
import { makeRemoteDatabaseAuthSignIn } from '@/main/factories/data'

export const makeRemoteAuthentication = (): IAuthentication => {
  return new RemoteAuthentication({
    auth: makeRemoteDatabaseAuthSignIn(),
  })
}

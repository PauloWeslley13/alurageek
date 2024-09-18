import { IUserLogged } from '@/data/usecases'
import { RemoteUserLogged } from '@/domain/user'
import { COLLECTION } from '@/infra/services/firebase'
import {
  makeRemoteDatabaseAuthToken,
  makeRemoteFirebaseFindById,
} from '@/main/factories/data'

export const makeRemoteUserLogged = (): IUserLogged => {
  return new RemoteUserLogged({
    firestore: makeRemoteFirebaseFindById<IUserLogged.Model>(COLLECTION.users),
    authToken: makeRemoteDatabaseAuthToken(),
  })
}

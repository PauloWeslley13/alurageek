import { DBFirebase, IFirebaseSignOut } from '@/infra/services/firebase'
import { makeRemoteDatabase } from '@/main/factories/data'

export const makeRemoteDatabaseAuthSignOut = (): IFirebaseSignOut => {
  return DBFirebase.signOutAuth(makeRemoteDatabase().auth())
}

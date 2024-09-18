import { DBFirebase, IAuth } from '@/infra/services/firebase'
import { makeRemoteDatabase } from '@/main/factories/data'

export const makeRemoteDatabaseAuthSignIn = (): IAuth.FirebaseSignIn => {
  return DBFirebase.signInAuth(makeRemoteDatabase().auth())
}

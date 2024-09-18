import { IFirebaseAuth } from '@/infra/services/firebase'
import { makeRemoteDatabaseAuthSignOut } from '@/main/factories/data'
import { makeRemoteAuthentication } from '@/main/factories/usecases'

export const authService = {
  signIn: async (params: IFirebaseAuth.Params) => {
    const login = makeRemoteAuthentication()
    return await login.authentication(params)
  },
  logOut: async () => {
    const auth = makeRemoteDatabaseAuthSignOut()
    await auth.signOut()
  },
}

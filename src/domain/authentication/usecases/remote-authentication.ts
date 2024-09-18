import { IAuth } from '@/infra/services/firebase'
import { IAuthentication } from '@/data/usecases'
import { authAdapter } from './auth-adapter'

interface RemoteAuthenticationDependencies {
  auth: IAuth.FirebaseSignIn
}

export class RemoteAuthentication implements IAuthentication {
  private auth: IAuth.FirebaseSignIn

  constructor(protected dependencies: RemoteAuthenticationDependencies) {
    this.auth = dependencies.auth
  }

  async authentication(
    params: IAuthentication.Params,
  ): Promise<RemoteAuthentication.Model> {
    const { userCredential, error } = await this.auth.authSignIn(params)
    const token = await userCredential?.user.getIdToken()
    const data = authAdapter(userCredential?.user, token)

    return {
      data,
      error,
    }
  }
}

namespace RemoteAuthentication {
  export type Model = IAuthentication.Model
}

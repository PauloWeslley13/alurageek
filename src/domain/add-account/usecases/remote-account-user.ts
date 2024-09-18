import { IAuth } from '@/infra/services/firebase'
import { IAddAccount } from '@/data/usecases'

interface RemoteAddAccountDependencies {
  auth: IAuth.FirebaseSignUp
}

export class RemoteAddAccount implements IAddAccount {
  private auth: IAuth.FirebaseSignUp

  constructor(protected dependencies: RemoteAddAccountDependencies) {
    this.auth = dependencies.auth
  }

  async register(params: IAddAccount.Params): Promise<RemoteAddAccount.Model> {
    const { userCredential, error } = await this.auth.authSignUp(params)

    return {
      data: userCredential,
      error,
    }
  }
}

namespace RemoteAddAccount {
  export type Model = IAddAccount.Model
}

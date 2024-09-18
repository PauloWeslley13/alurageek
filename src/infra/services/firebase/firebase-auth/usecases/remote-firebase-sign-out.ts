import { Auth, signOut } from 'firebase/auth'
import { IAuth, IFirebaseSignOut } from '@/infra/services/firebase'

export class RemoteFirebaseSignOut implements IFirebaseSignOut {
  private auth: Auth

  constructor(protected dependencies: IAuth.Dependencies<Auth>) {
    this.auth = dependencies.auth
  }

  async signOut(): Promise<void> {
    await signOut(this.auth)
  }
}

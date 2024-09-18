import {
  IFirebaseAuthToken,
  IFirebaseFindById,
} from '@/infra/services/firebase'
import { IUserLogged } from '@/data/usecases'

interface RemoteUserLoggedDependencies {
  firestore: IFirebaseFindById<IUserLogged.Model>
  authToken: IFirebaseAuthToken
}

export class RemoteUserLogged implements IUserLogged {
  private firestore: IFirebaseFindById<IUserLogged.Model>
  private authToken: IFirebaseAuthToken

  constructor(protected dependencies: RemoteUserLoggedDependencies) {
    this.firestore = dependencies.firestore
    this.authToken = dependencies.authToken
  }

  async getUserLogged(params: IUserLogged.Params): Promise<IUserLogged.Model> {
    const data = await this.firestore.findById(params.userId)
    const token = await this.authToken.getFirebaseAuthToken()

    return { ...data, accessToken: token }
  }
}

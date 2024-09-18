import { FirebaseError } from 'firebase/app'
import { updateProfile, UserCredential } from 'firebase/auth'
import { doc, FirestoreError, setDoc } from 'firebase/firestore'
import { AccountModel } from '@/data/models'
import { COLLECTION, IFirebase } from '@/infra/services/firebase'
import { userAdapters } from './adapters/user-adapter'
import { IUser } from '@/domain/user/entities/user'

interface IUserRepoResponse {
  data: AccountModel | null
  error: FirebaseError | null | string
}

export interface IUserRepository {
  save(
    credential: UserCredential | null,
    user: IUser,
  ): Promise<IUserRepoResponse>
}

export class UserRepository implements IUserRepository {
  private response: IUserRepoResponse
  private token: string

  constructor(private readonly database: IFirebase) {
    this.response = { data: null, error: null }
    this.token = ''
  }

  async save(
    credential: UserCredential | null,
    user: IUser,
  ): Promise<IUserRepoResponse> {
    await this.createUser(credential, user)
    return {
      data: this.response.data,
      error: this.response.error,
    }
  }

  private async createUser(
    credential: UserCredential | null,
    user: IUser,
  ): Promise<void> {
    if (!credential) {
      this.response.error = 'Não foi possível cadastrar usuário'
      return
    }

    this.token = await credential.user.getIdToken()

    await setDoc(
      doc(this.database.collection(COLLECTION.users), credential.user.uid),
      { ...user },
    )
      .then(() => {
        this.response.data = userAdapters.userAdapter(user, this.token)
      })
      .catch((error: unknown) => {
        if (error instanceof FirestoreError) {
          this.response.error = error
        }
      })

    await updateProfile(credential.user, {
      displayName: user.username,
      photoURL: user.photoUrl,
    })
  }
}

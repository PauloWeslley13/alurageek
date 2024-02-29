import { createUserWithEmailAndPassword } from 'firebase/auth'
import { User } from './user'
import { auth } from '../../infra/firebase/sdk-client'
import { IUserProps } from './user-props'

export class UserUseCase {
  async userAuthentication(data: Omit<IUserProps, 'id'>) {
    const authResponse = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    )

    const userAuth = new User({ id: authResponse.user.uid, ...data })

    userAuth.create(userAuth, authResponse)

    console.log(userAuth)
  }
}

import { FirebaseError } from 'firebase/app'
import { Authentication } from '@/domain/authentication'
import { HttpStatusCode, UserData } from '@/database'
import { User, userAdapter, UserRepository } from '@/domain/user'
import { Errors } from '@/domain/errors'

export class UserUseCase {
  private auth = new Authentication()

  async userAuthSignUp(
    data: Omit<UserRepository, 'id'>,
  ): Promise<UserUseCase.ReturnAuthSignUp> {
    const { email, password } = data

    try {
      const register = await this.auth.signUp({ email, password })
      const userAuth = userAdapter({ id: register.user.uid, ...data })
      const user = await userAuth.create(register)

      return user
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === HttpStatusCode.badRequest) {
          return new Errors.EmailInUseError()
        }
      }
    }
    return new Errors.UnexpectedError()
  }

  async userAuthSignIn(
    data: Pick<UserRepository, 'email' | 'password'>,
  ): Promise<UserUseCase.ReturnAuthSignIn> {
    const { email, password } = data

    try {
      const { user } = await this.auth.signIn({ email, password })
      const userAuth = userAdapter({
        id: user.uid,
        photoUrl: user.photoURL!,
        username: user.displayName!,
        ...data,
      })

      return userAuth
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        if (err.code === HttpStatusCode.forbidden) {
          return new Errors.InvalidCredentialsError()
        }
      }
    }

    return new Errors.UnexpectedError()
  }

  async userLogout(): Promise<void> {
    await this.auth.signOut()
  }

  async userById(uid: string): Promise<UserRepository> {
    const userDataLogged = new UserData()
    const data = await userDataLogged.getUserLoggedById(uid)

    return data
  }
}

export namespace UserUseCase {
  export type ReturnAuthSignUp =
    | UserRepository
    | 'Email já cadastrado'
    | 'Algo de errado aconteceu. Tente novamente em breve.'

  export type ReturnAuthSignIn =
    | User
    | Errors.InvalidCredentialsError
    | Errors.UnexpectedError
}

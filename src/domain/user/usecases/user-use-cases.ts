import { FirebaseError } from 'firebase/app'
import { AuthenticationUseCase } from '../../authentication'
import { UserData } from './../../../database'
import { User } from '../entities/user'
import { UserRepository } from '../repositories'

export class UserUseCase {
  private auth = new AuthenticationUseCase()

  async userAuthSignUp(data: Omit<UserRepository, 'id'>) {
    const { email, password } = data

    try {
      const register = await this.auth.signUp(email, password)

      const userAuth = new User({ id: register.user.uid, ...data })

      const user = userAuth.create(register)

      return user
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          return 'Email já cadastrado'
        }
      }
    }
    return 'Ops! Aconteceu um erro inesperado'
  }

  async userAuthSignIn(data: Pick<UserRepository, 'email' | 'password'>) {
    const { email, password } = data

    try {
      const { user } = await this.auth.signIn(email, password)

      const userAuth = new User({
        id: user.uid,
        photoUrl: user.photoURL!,
        username: user.displayName!,
        ...data,
      })

      return userAuth
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        if (err.code === 'auth/invalid-credential') {
          return 'Usuário inválido'
        }
      }
    }

    return 'Ops! Aconteceu um erro inesperado'
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

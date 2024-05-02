import { UserRepository, UserUseCase } from '@/domain/user'
import { SignInProps } from '@/pages/authentication/modules/sign-in/useSignIn'
import { SignUpProps } from '@/pages/authentication/modules/sign-up/useSignUp'

type UsersProps = Pick<SignInProps, 'email'> &
  Pick<SignUpProps, 'username' | 'photoUrl'> & {
    id: string
    accessToken?: string
  }

type UserType = {
  user: UsersProps
  isLogged: boolean
}

type UserProps = UserRepository

type User = UserUseCase.ReturnAuthSignUp

export { UsersProps, UserType, UserProps }

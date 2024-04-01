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

export type { UsersProps, UserType }

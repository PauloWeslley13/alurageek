import { useNavigate } from 'react-router-dom'
import { UserUseCase } from './../../../domain/user/user-use-cases'
import { toasts } from '@/components/ui'
import { SignInProps } from '@/pages/authentication/modules/sign-in/useSignIn'
import { SignUpProps } from '@/pages/authentication/modules/sign-up/useSignUp'
import { useAppDispatch } from '@/store/hook/useRedux'
import { logout, setUserAuth } from '@/store/reducers'
import { UsersProps } from '@/components/types'

const userAuth = new UserUseCase()

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignUp = async (data: SignUpProps) => {
    await userAuth.userAuthCreate(data).then((user) => {
      dispatch(setUserAuth(user as UsersProps))
      toasts.success({ title: 'Usuário cadastrado' })
      navigate('/home')
    })
  }

  const handleSignIn = async ({ email, password }: SignInProps) => {
    await userAuth.userAuthentication({ email, password })
    toasts.success({ title: 'Usuário logado' })
    navigate('/home')
  }

  const handleLogout = async () => {
    await userAuth.userLogout()
    dispatch(logout())
    toasts.success({ title: 'Usuário deslogado' })
  }

  return {
    handleSignIn,
    handleSignUp,
    handleLogout,
  }
}

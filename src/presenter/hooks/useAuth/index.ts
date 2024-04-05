import { useNavigate } from 'react-router-dom'
import { UserUseCase } from '@/domain/user'
import { toasts } from '@/presenter/components/ui'
import { SignInProps } from '@/presenter/pages/authentication/components/sign-in/useSignIn'
import { SignUpProps } from '@/presenter/pages/authentication/components/sign-up/useSignUp'
import { useAppDispatch } from '@/main/store/hook/useRedux'
import { logout, setUserAuth } from '@/main/store/reducers'
import { UsersProps } from '@/presenter/components/types'

const makeUserAuth = (): UserUseCase => new UserUseCase()

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const userAuth = makeUserAuth()

  const handleAuthUser = (user: UsersProps) => {
    const userData = user satisfies UsersProps
    dispatch(setUserAuth(userData))
  }

  const handleSignUp = async (data: SignUpProps) => {
    await userAuth.userAuthSignUp(data).then((user) => {
      if (
        user === 'Email já cadastrado' ||
        user === 'Ops! Aconteceu um erro inesperado'
      ) {
        toasts.error({ title: 'Não foi possível cadastrar usuário' })
        return
      }

      handleAuthUser(user.user)
      toasts.success({ title: 'Usuário cadastrado' })
      navigate('/home')
    })
  }

  const handleSignIn = async ({ email, password }: SignInProps) => {
    await userAuth.userAuthSignIn({ email, password }).then((user) => {
      if (
        user === 'Usuário inválido' ||
        user === 'Ops! Aconteceu um erro inesperado'
      ) {
        toasts.error({ title: 'Usuário inválido' })
        return
      }

      toasts.success({ title: 'Usuário logado' })
      navigate('/home')
    })
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

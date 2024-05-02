import { useNavigate } from 'react-router-dom'
import { toasts } from '@/presenter/components/ui'
import { SignInProps } from '@/presenter/pages/authentication/components/sign-in/useSignIn'
import { SignUpProps } from '@/presenter/pages/authentication/components/sign-up/useSignUp'
import { useAppDispatch } from '@/main/store/hook/useRedux'
import { logout, setUserAuth } from '@/main/store/reducers'
import { UsersProps } from '@/presenter/components/types'
import { makeAuthenticationAdapter } from '@/presenter/adapters'

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { makeEmailInUseError, makeUnexpectedError, makeUserAuth } =
    makeAuthenticationAdapter()

  const handleAuthUser = (user: UsersProps) => {
    const userData = user satisfies UsersProps
    dispatch(setUserAuth(userData))
  }

  const handleSignUp = async (data: SignUpProps) => {
    await makeUserAuth.userAuthSignUp(data).then((user) => {
      if (user === makeEmailInUseError || user === makeUnexpectedError) {
        toasts.error({ title: 'Não foi possível cadastrar usuário' })
        return
      }

      console.log(user)

      handleAuthUser(user)
      toasts.success({ title: 'Usuário cadastrado' })
      navigate('/home')
    })
  }

  const handleSignIn = async ({ email, password }: SignInProps) => {
    await makeUserAuth.userAuthSignIn({ email, password }).then((user) => {
      if (
        user === 'Usuário inválido' ||
        user === 'Ops! Aconteceu um erro inesperado'
      ) {
        toasts.error({ title: 'Usuário inválido' })
        return
      }
      handleAuthUser(user)
      toasts.success({ title: 'Usuário logado' })
      navigate('/home')
    })
  }

  const handleLogout = async () => {
    await makeUserAuth.userLogout()
    dispatch(logout())
    toasts.success({ title: 'Usuário deslogado' })
  }

  return {
    handleSignIn,
    handleSignUp,
    handleLogout,
  }
}

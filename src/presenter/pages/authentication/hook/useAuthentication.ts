import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/main/store/hook/useRedux'

export function useAuthentication() {
  const [signInOrSignUp, setSignInOrSignUp] = useState<'signIn' | 'signUp'>(
    'signIn',
  )
  const { user } = useAppSelector((state) => state.authentication)
  const navigate = useNavigate()
  const hasLoginOrRegister = signInOrSignUp === 'signIn'

  const loadAuthInformation = useMemo(() => {
    return hasLoginOrRegister
      ? { title: 'Login', link: 'Criar Conta' }
      : { title: 'Cadastrar', link: 'Já tenho conta' }
  }, [hasLoginOrRegister])

  const handlerNavHome = useCallback(() => {
    if (user) {
      navigate('/home')
    }
  }, [navigate, user])

  function handlerChangeViewLoginOrRegister() {
    setSignInOrSignUp(hasLoginOrRegister ? 'signUp' : 'signIn')
  }

  return {
    signInOrSignUp,
    hasLoginOrRegister,
    loadAuthInformation,
    handlerNavHome,
    handlerChangeViewLoginOrRegister,
  }
}

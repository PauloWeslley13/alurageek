import { useState } from 'react'
import { useTheme } from '@mui/material'

type SignInOrSignUpProps = 'signIn' | 'signUp'

export const useAuthentication = () => {
  const [signInOrSignUp, setSignInOrSignUp] =
    useState<SignInOrSignUpProps>('signIn')
  const theme = useTheme()

  const changeAuth = (option: SignInOrSignUpProps) => {
    setSignInOrSignUp(option)
  }

  const linkAction = () => {
    changeAuth(signInOrSignUp === 'signIn' ? 'signUp' : 'signIn')
  }

  return {
    theme,
    signInOrSignUp,
    linkAction,
  }
}

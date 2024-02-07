import { useState } from 'react'
import { Link, Typography, useTheme } from '@mui/material'
import { SignIn, SignUp } from './modules'
import { FONTS } from '@/styles'
import * as S from './authentication-styles'

type SignInOrSignUpProps = 'signIn' | 'signUp'

export const Authentication = () => {
  const [signInOrSignUp, setSignInOrSignUp] =
    useState<SignInOrSignUpProps>('signIn')
  const theme = useTheme()

  const changeAuth = (option: SignInOrSignUpProps) => {
    setSignInOrSignUp(option)
  }

  const linkAction = () => {
    changeAuth(signInOrSignUp === 'signIn' ? 'signUp' : 'signIn')
  }

  return (
    <S.Wrapper>
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: theme.palette.primary.dark,
          fontSize: FONTS.fontSizes['3xl'],
        }}
      >
        {signInOrSignUp === 'signIn' ? 'Iniciar Sesión' : 'Cadastra-se'}
      </Typography>

      {signInOrSignUp === 'signIn' ? <SignIn /> : <SignUp />}

      <Link
        component="button"
        variant="h5"
        onClick={linkAction}
        sx={{
          textDecoration: 'none',
          marginTop: theme.spacing(5),
          ':hover': { color: theme.palette.primary.dark },
        }}
      >
        {signInOrSignUp === 'signIn' ? 'criar conta' : 'ja tenho conta'}
      </Link>
    </S.Wrapper>
  )
}

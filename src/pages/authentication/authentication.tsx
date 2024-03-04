import { Link, Typography } from '@mui/material'
import { SignIn, SignUp } from './modules'
import { FONTS } from '@/styles'
import { useAuthentication } from './useAuthentication'
import * as S from './authentication-styles'

const Authentication = () => {
  const { theme, signInOrSignUp, linkAction } = useAuthentication()

  return (
    <S.Wrapper>
      <Typography
        component="h2"
        variant="h1"
        color={theme.palette.primary.dark}
        fontSize={FONTS.fontSizes['3xl']}
      >
        {signInOrSignUp === 'signIn' ? 'Login' : 'Cadastrar'}
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

export { Authentication }

import Container from '@mui/material/Container'
import { Alert, Loader } from '@/presenter/components/ui'
import { SignIn, SignUp } from './components'
import { useAuthentication } from './hook'
import * as S from './styles'

function Authentication() {
  const {
    error,
    isLoading,
    hasLoginOrRegister,
    loadAuthInformation,
    handlerChangeViewLoginOrRegister,
  } = useAuthentication()

  if (isLoading) {
    return <Loader.Content message="Processando" sx={{ height: 450 }} />
  }

  return (
    <Container maxWidth="sm">
      <S.Wrapper>
        <S.StyledTypography component="h2" variant="h2">
          {loadAuthInformation.title}
        </S.StyledTypography>

        {hasLoginOrRegister ? <SignIn /> : <SignUp />}

        <S.StyledLink
          component="button"
          variant="h5"
          onClick={handlerChangeViewLoginOrRegister}
        >
          {loadAuthInformation.link}
        </S.StyledLink>

        {error && (
          <Alert
            message={error}
            sx={{
              mt: 5,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        )}
      </S.Wrapper>
    </Container>
  )
}

export default Authentication

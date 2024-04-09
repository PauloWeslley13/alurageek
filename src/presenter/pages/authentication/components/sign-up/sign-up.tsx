import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import { Alert, InputField } from '@/presenter/components/ui'
import { useSignUp } from './useSignUp'

export const SignUp = () => {
  const { register, handleSubmit, signUp, errors, alertSignUp } = useSignUp()
  const theme = useTheme()

  return (
    <form onSubmit={handleSubmit(signUp)} autoComplete="off">
      <InputField
        {...register('username')}
        type="text"
        label="Username"
        placeholder="Informe o usuário"
        error={!!errors.username?.message}
        helperText={errors.username?.message}
      />
      <InputField
        {...register('email')}
        type="text"
        label="Email"
        placeholder="Informe o usuário"
        error={!!errors.email?.message}
        helperText={errors.email?.message}
      />
      <InputField
        {...register('password')}
        type="password"
        label="Senha"
        placeholder="Informe a senha"
        error={!!errors.password?.message}
        helperText={errors.password?.message}
      />
      <InputField
        {...register('photoUrl')}
        type="text"
        label="Foto"
        placeholder="Informe a url da foto"
        error={!!errors.password?.message}
        helperText={errors.password?.message}
      />

      <Button
        variant="primary"
        type="submit"
        onClick={alertSignUp}
        sx={{
          width: '100%',
          height: theme.spacing(12),
          marginTop: theme.spacing(2),
          textTransform: 'uppercase',
          letterSpacing: 1.2,
        }}
      >
        Cadastrar
      </Button>

      <Alert
        errors={{
          email: errors.email?.message,
          password: errors.password?.message,
          username: errors.username?.message,
        }}
      />
    </form>
  )
}

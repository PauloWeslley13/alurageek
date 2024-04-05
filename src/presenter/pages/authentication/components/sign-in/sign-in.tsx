import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import { InputField } from '@/presenter/components/ui'
import { useSignIn } from './useSignIn'

export const SignIn = () => {
  const { register, handleSubmit, alert, signIn, errors } = useSignIn()
  const theme = useTheme()

  return (
    <form onSubmit={handleSubmit(signIn)} autoComplete="off">
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
        label="Password"
        placeholder="Informe a senha"
        error={!!errors.password?.message}
        helperText={errors.password?.message}
      />

      <Button
        variant="primary"
        type="submit"
        onClick={alert}
        sx={{
          width: '100%',
          height: theme.spacing(12),
          marginTop: theme.spacing(2),
          textTransform: 'uppercase',
          letterSpacing: 1.2,
        }}
      >
        Entrar
      </Button>
    </form>
  )
}

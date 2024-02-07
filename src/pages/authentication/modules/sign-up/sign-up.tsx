import { Alert, useTheme } from '@mui/material'
import { Button, InputField } from '@/components/ui'
import { useSignUp } from './useSignUp'

export const SignUp = () => {
  const { register, handleSubmit, signUp, errors } = useSignUp()
  const theme = useTheme()

  return (
    <form onSubmit={handleSubmit(signUp)}>
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
        label="Password"
        placeholder="Informe a senha"
        error={!!errors.password?.message}
        helperText={errors.password?.message}
      />

      <Button
        label="Entrar"
        type="submit"
        onClick={alert}
        sx={{
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
          width: '100%',
          height: theme.spacing(12),
          marginTop: theme.spacing(2),
          textTransform: 'uppercase',
        }}
      />

      {errors.email?.message &&
        errors.password?.message &&
        errors.username?.message && (
          <Alert variant="filled" severity="error">
            Campos preenchido incorretamente
          </Alert>
        )}
    </form>
  )
}

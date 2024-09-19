import Button from '@mui/material/Button'
import { Alert, InputField } from '@/presenter/components/ui'
import { useSignIn } from './hook'

export function SignIn() {
  const { errors, register, handleSubmit, handlerSignIn, isValidInputSignIn } =
    useSignIn()

  return (
    <form onSubmit={handleSubmit(handlerSignIn)} autoComplete="off">
      <InputField
        {...register('email')}
        type="text"
        label="Email"
        placeholder="Informe o email"
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

      <Button variant="primary" type="submit">
        Entrar
      </Button>

      {isValidInputSignIn() && (
        <Alert
          message="Campos preenchido incorretamente"
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        />
      )}
    </form>
  )
}

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toasts } from '@/presenter/components/ui'
import { useAuth } from '@/presenter/hooks/useAuth'

export const schemaSignIn = z.object({
  email: z.string().email({ message: 'Informe um email válido' }),
  password: z.string().min(6, { message: 'Informe sua senha' }),
})

export type SignInProps = z.infer<typeof schemaSignIn>

export const useSignIn = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaSignIn),
  })
  const { handleSignIn } = useAuth()

  const signIn = async (data: SignInProps) => {
    await handleSignIn(data)
    reset()
  }

  const alert = () => {
    if (errors.email?.message && errors.password?.message) {
      toasts.error({ title: 'Preencha os campos' })
    }
  }

  return {
    register,
    handleSubmit,
    signIn,
    alert,
    errors,
  }
}

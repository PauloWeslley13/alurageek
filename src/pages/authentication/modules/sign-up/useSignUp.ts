import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toasts } from '@/components/ui'
import { useAuth } from '@/hooks/useAuth'

export const schemaSignUp = z.object({
  email: z.string().email({ message: 'Informe um email válido' }),
  username: z.string().min(1, { message: 'Informe seu nome' }),
  password: z.string().min(6, { message: 'Informe uma senha válida' }),
  photoUrl: z.string().min(1, { message: 'Informe uma url válida' }),
})

export type SignUpProps = z.infer<typeof schemaSignUp>

export const useSignUp = () => {
  const { handleSignUp } = useAuth()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaSignUp),
  })

  const signUp = (data: SignUpProps) => {
    handleSignUp(data)
    reset()
  }

  const alertSignUp = () => {
    if (
      errors.email?.message &&
      errors.password?.message &&
      errors.username?.message &&
      errors.photoUrl?.message
    ) {
      toasts.error({ title: 'Preencha os campos' })
    }
  }

  return {
    signUp,
    register,
    handleSubmit,
    errors,
    alertSignUp,
  }
}

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch } from '@/store/hook/useRedux'
import { handleSignUp } from '@/store/reducers'
import { toasts } from '@/components/ui'

export const schemaSignUp = z.object({
  email: z.string().email({ message: 'Informe um email válido' }),
  password: z.string().min(6, { message: 'Informe uma senha válida' }),
  username: z.string().min(1, { message: 'Informe seu nome' }),
})

export type SignUpProps = z.infer<typeof schemaSignUp>

export const useSignUp = () => {
  const dispatch = useAppDispatch()
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

  console.log(errors)

  const signUp = (data: SignUpProps) => {
    console.log(data)
    dispatch(handleSignUp(data))

    reset()
  }

  const alertSignUp = () => {
    if (
      errors.email?.message &&
      errors.password?.message &&
      errors.username?.message
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

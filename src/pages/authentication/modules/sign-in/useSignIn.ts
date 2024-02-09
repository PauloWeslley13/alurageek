import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toasts } from '@/components/ui'
import { useAppDispatch } from '@/store/hook/useRedux'
import { handleSignIn } from '@/store/reducers'

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
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const signIn = (data: SignInProps) => {
    dispatch(handleSignIn(data))
    navigate('/home')

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

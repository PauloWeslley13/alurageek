import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UsersProps } from '@/components/types/users-props'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { collectionUser } from '@/config/firebase/collections'
import { SignUpProps } from '@/pages/authentication/modules/sign-up/useSignUp'
import { auth } from '@/config/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { toasts } from '@/components/ui'
import { SignInProps } from '@/pages/authentication/modules/sign-in/useSignIn'
import { setLocalStorage } from '../functions/set-local-storage'
import usersService from '@/services/get-users'

const fetchUser = createAsyncThunk('user/get', usersService.get)

const usersSlice = createSlice({
  name: 'users',
  initialState: {} as UsersProps,
  reducers: {
    createUser: (_, { payload }: PayloadAction<SignUpProps>) => {
      console.log(payload)
      const { email, password } = payload

      const signUp = async () => {
        try {
          const authResponse = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
          )
          const uid = authResponse.user.uid
          const docRef = doc(collectionUser, uid)

          await setDoc(docRef, payload)
          toasts.success({ title: 'Usuário cadastrado' })
        } catch (error: unknown) {
          if (error instanceof FirebaseError) {
            if (error.code === 'auth/email-already-in-use') {
              toasts.error({ title: 'Email já cadastrado' })
              return
            }
          }

          toasts.error({ title: 'Ops! Aconteceu um erro inesperado' })
        }
      }

      signUp()
    },
    handleSignIn: (_, { payload }: PayloadAction<SignInProps>) => {
      const { email, password } = payload

      const signIn = async () => {
        try {
          const authResponse = await signInWithEmailAndPassword(
            auth,
            email,
            password,
          )
          const uid = authResponse.user.uid

          await setLocalStorage(uid)
          toasts.success({ title: 'Usuário logado' })
        } catch (error: unknown) {
          if (error instanceof FirebaseError) {
            if (error.code === 'auth/invalid-credential') {
              toasts.error({ title: 'Credenciais inválidas' })
              return
            }
          }
          toasts.error({ title: 'Ops! Aconteceu um erro inesperado' })
        }
      }

      signIn()
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (_, { payload }) => {
      return payload
    })
  },
})

export { fetchUser }
export const { createUser, handleSignIn } = usersSlice.actions
export default usersSlice.reducer

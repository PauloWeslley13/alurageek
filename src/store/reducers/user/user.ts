import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UsersProps } from '@/components/types/users-props'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { collectionUser } from '@/config/firebase/collections'
import { SignUpProps } from '@/pages/authentication/modules/sign-up/useSignUp'
import { auth } from '@/config/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { toasts } from '@/components/ui'
import { SignInProps } from '@/pages/authentication/modules/sign-in/useSignIn'
import { saveUserInLocalStorage } from './functions/save-user-in-local-storage'
import { dataUserLocalStorageKey } from '@/constants/local-storage-key'

type UserType = {
  user: UsersProps
  isLogged: boolean
}

const INITIAL_STATE: UserType = {
  user: {} as UsersProps,
  isLogged: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    handleSignUp: (_, { payload }: PayloadAction<SignUpProps>) => {
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
          const userStorage = {
            uid,
            username: payload.username,
          }

          await updateProfile(authResponse.user, {
            displayName: payload.username,
            photoURL: payload.photoUrl,
          })
            .then(() => console.log('Updated profile'))
            .catch((err) => console.log(err))

          saveUserInLocalStorage(userStorage)
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
          const data = await signInWithEmailAndPassword(auth, email, password)

          const signInUserStorage = {
            uid: data.user.uid,
            username: data.user.displayName!,
          }

          saveUserInLocalStorage(signInUserStorage)

          toasts.success({ title: 'Usuário logado' })
        } catch (error: unknown) {
          if (error instanceof FirebaseError) {
            if (error.code === 'auth/invalid-credential') {
              toasts.error({ title: 'Usuário inválido' })
              return
            }
          }
          toasts.error({ title: 'Ops! Aconteceu um erro inesperado' })
        }
      }

      signIn()

      const userSaved = auth.currentUser

      if (userSaved) {
        const userAuthenticated: UsersProps = {
          id: userSaved.uid,
          username: userSaved.displayName!,
          photoUrl: userSaved.photoURL!,
          ...payload,
        }

        return {
          user: userAuthenticated,
          isLogged: true,
        }
      }
    },
    logout: (state) => {
      state.isLogged = false
      const handleLogout = async () => {
        await signOut(auth)
          .then(() => {
            localStorage.removeItem(dataUserLocalStorageKey)
          })
          .catch((err) => {
            console.log(err)
          })
      }
      handleLogout()
    },
    getUserLogged: (_, { payload }: PayloadAction<UserType>) => {
      return payload
    },
  },
})

export const { handleSignUp, handleSignIn, logout, getUserLogged } =
  userSlice.actions
export const userReducer = userSlice.reducer

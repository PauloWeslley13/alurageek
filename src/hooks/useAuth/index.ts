import { FirebaseError } from 'firebase/app'
import { doc, setDoc } from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { toasts } from '@/components/ui'
import { auth } from '@/config/firebase'
import { saveUserInLocalStorage } from '@/functions/save-user-in-local-storage'
import { SignInProps } from '@/pages/authentication/modules/sign-in/useSignIn'
import { collectionUser } from '@/config/firebase/collections'
import { SignUpProps } from '@/pages/authentication/modules/sign-up/useSignUp'
import { useAppDispatch } from '@/store/hook/useRedux'
import { setUserAuth } from '@/store/reducers'

export const useAuth = () => {
  const dispatch = useAppDispatch()

  const handleSignUp = async ({
    username,
    email,
    password,
    photoUrl,
  }: SignUpProps) => {
    try {
      const authResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      dispatch(setUserAuth(authResponse))

      const uid = authResponse.user.uid
      const docRef = doc(collectionUser, uid)
      const userStorage = {
        uid,
        username,
      }

      await updateProfile(authResponse.user, {
        displayName: username,
        photoURL: photoUrl,
      })

      saveUserInLocalStorage(userStorage)
      await setDoc(docRef, {
        email,
        username,
        password,
        photoUrl,
      })
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

  const handleSignIn = async ({ email, password }: SignInProps) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password)
      dispatch(setUserAuth(data))

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

  return {
    handleSignIn,
    handleSignUp,
  }
}

import { FirebaseError } from 'firebase/app'
import { doc, setDoc } from 'firebase/firestore'
import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { toasts } from '@/components/ui'
import { auth } from '@/config/firebase'
import { saveUserInLocalStorage } from '@/functions/save-user-in-local-storage'
import { SignInProps } from '@/pages/authentication/modules/sign-in/useSignIn'
import { collectionUser } from '@/config/firebase/collections'
import { SignUpProps } from '@/pages/authentication/modules/sign-up/useSignUp'
import { useAppDispatch } from '@/store/hook/useRedux'
import { logout, setUserAuth } from '@/store/reducers'
import { UsersProps } from '@/components/types'
import { dataUserLocalStorageKey } from '@/constants'

type UserOnAuthentication = {
  dataUser: UserCredential
  password: string
}

export const useAuth = () => {
  const dispatch = useAppDispatch()

  const userOnAuthentication = ({
    password,
    dataUser,
  }: UserOnAuthentication): UsersProps => ({
    id: dataUser.user.uid,
    email: dataUser.user.email!,
    username: dataUser.user.displayName!,
    photoUrl: dataUser.user.photoURL!,
    password,
  })

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

      const userOnAuthSignUp = userOnAuthentication({
        password,
        dataUser: authResponse,
      })

      dispatch(setUserAuth(userOnAuthSignUp))

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

      const useOnAuthSignIn = userOnAuthentication({
        password,
        dataUser: data,
      })

      dispatch(setUserAuth(useOnAuthSignIn))

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

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        localStorage.removeItem(dataUserLocalStorageKey)
        dispatch(logout())
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {
    handleSignIn,
    handleSignUp,
    handleLogout,
  }
}

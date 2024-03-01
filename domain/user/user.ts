import { UserCredential, updateProfile } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { doc, setDoc } from 'firebase/firestore'
import { collectionUser } from '../../database/firebase/collections'
import { IUserProps } from './user-props'
import { toasts } from '@/components/ui'

// TODO: ENTIDADE User
export class User {
  public readonly id: string

  public email: string
  public username: string
  public photoUrl: string
  public password: string

  constructor(props: IUserProps) {
    this.id = props.id
    this.email = props.email
    this.username = props.username
    this.password = props.password
    this.photoUrl = props.photoUrl
  }

  async create(userAuth: UserCredential) {
    const userRef = doc(collectionUser, userAuth.user.uid)

    try {
      await updateProfile(userAuth.user, {
        displayName: this.username,
        photoURL: this.photoUrl,
      })

      await setDoc(userRef, {
        username: this.username,
        email: this.email,
        password: this.password,
        photoUrl: this.photoUrl,
      })
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
}

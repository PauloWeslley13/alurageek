import { FirebaseError } from 'firebase/app'

export namespace IFirebaseAuth {
  export type Params = {
    email: string
    password: string
  }

  export type Model<T> = {
    userCredential: T | null
    error: FirebaseError | null
  }
}

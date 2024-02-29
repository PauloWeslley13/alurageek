// import { UserCredential, updateProfile } from 'firebase/auth'
// import { doc, setDoc } from 'firebase/firestore'
// import { collectionUser } from 'infra/firebase/collections'

// TODO: ENTIDADE User
export class User {
  public readonly id: string

  public email: string
  public username: string
  public photoUrl: string
  public password: string

  constructor(props: User) {
    this.id = props.id
    this.email = props.email
    this.username = props.username
    this.password = props.password
    this.photoUrl = props.photoUrl
  }

  // async create(data: User, userAuth: UserCredential) {
  //   const userRef = doc(collectionUser, userAuth.user.uid)

  //   await updateProfile(userAuth.user, {
  //     displayName: data.username,
  //     photoURL: data.photoUrl,
  //   })

  //   await setDoc(userRef, data)
  // }
}

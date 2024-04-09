import { IFirebase, Firebase, FirebaseAuth, IFirebaseAuth } from '../firebase'

export class DBFactory {
  public static database(): IFirebase {
    return new Firebase()
  }

  public static auth(): IFirebaseAuth {
    return new FirebaseAuth()
  }
}

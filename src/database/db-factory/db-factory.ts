import { IFirebase, Firebase, FirebaseAuth } from '../firebase'

export class DBFactory {
  public static database(): IFirebase {
    return new Firebase()
  }

  public static auth(): FirebaseAuth {
    return new FirebaseAuth()
  }
}

import { IFirebase, Firebase } from '../firebase'

export class DBFactory {
  public static database(): IFirebase {
    return new Firebase()
  }
}

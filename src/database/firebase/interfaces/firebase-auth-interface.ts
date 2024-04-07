export interface IFirebaseAuth<T, R> {
  createUserWithEmailAndPassword(
    auth: R,
    email: string,
    password: string,
  ): Promise<T>
  signInWithEmailAndPassword(
    auth: R,
    email: string,
    password: string,
  ): Promise<T>
  signOut(auth: R): Promise<void>
}

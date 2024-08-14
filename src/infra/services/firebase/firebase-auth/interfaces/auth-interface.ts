/* eslint-disable prettier/prettier */
import { UserCredential } from "firebase/auth";
import {
  IFirebaseAuthSignIn,
  IFirebaseAuthSignUp,
} from "@/infra/services/firebase";

export namespace IAuth {
  export interface FirebaseSignUp
    extends IFirebaseAuthSignUp<IFirebaseAuthSignUp.Model<UserCredential>> {}

  export interface FirebaseSignIn
    extends IFirebaseAuthSignIn<IFirebaseAuthSignIn.Model<UserCredential>> {}

  export interface Dependencies<T> {
    auth: T;
  }
}

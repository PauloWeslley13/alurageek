import { FirebaseError } from "firebase/app";

export interface IErrorMessage {
  getErrorMessage(params: string | undefined): FirebaseError;
}

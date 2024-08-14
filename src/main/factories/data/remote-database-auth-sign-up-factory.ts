import { DBFirebase, IAuth } from "@/infra/services/firebase";
import { makeRemoteDatabase } from "@/main/factories/data";

export const makeRemoteDatabaseAuthSignUp = (): IAuth.FirebaseSignUp => {
  return DBFirebase.signUpAuth(makeRemoteDatabase().auth());
};

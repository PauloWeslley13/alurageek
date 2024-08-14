import {
  Auth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import {
  IAuth,
  IFirebaseAuth,
  IFirebaseAuthSignIn,
} from "@/infra/services/firebase";

export class RemoteFirebaseAuthSignIn implements IAuth.FirebaseSignIn {
  protected authResponse: IFirebaseAuthSignIn.Model<UserCredential>;
  private auth: Auth;

  constructor(protected dependencies: IAuth.Dependencies<Auth>) {
    this.auth = dependencies.auth;
    this.authResponse = { userCredential: null, error: null };
  }

  async authSignIn(
    params: IFirebaseAuth.Params,
  ): Promise<RemoteFirebaseAuthSignIn.Model> {
    try {
      this.authResponse.userCredential = await signInWithEmailAndPassword(
        this.auth,
        params.email,
        params.password,
      );
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        this.authResponse.error = error;
      }
    }

    return this.authResponse;
  }
}

export namespace RemoteFirebaseAuthSignIn {
  export type Model = IFirebaseAuthSignIn.Model<UserCredential>;
}

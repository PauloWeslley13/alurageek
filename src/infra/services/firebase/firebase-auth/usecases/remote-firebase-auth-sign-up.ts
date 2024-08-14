import {
  Auth,
  createUserWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import {
  IAuth,
  IFirebaseAuth,
  IFirebaseAuthSignUp,
} from "@/infra/services/firebase";

export class RemoteFirebaseAuthSignUp implements IAuth.FirebaseSignUp {
  protected authResponse: IFirebaseAuthSignUp.Model<UserCredential>;
  private auth: Auth;

  constructor(protected dependencies: IAuth.Dependencies<Auth>) {
    this.auth = dependencies.auth;
    this.authResponse = { userCredential: null, error: null };
  }

  async authSignUp(
    params: IFirebaseAuth.Params,
  ): Promise<RemoteFirebaseAuthSignUp.Model> {
    try {
      this.authResponse.userCredential = await createUserWithEmailAndPassword(
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

export namespace RemoteFirebaseAuthSignUp {
  export type Model = IFirebaseAuthSignUp.Model<UserCredential>;
}

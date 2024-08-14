import { Auth } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { IAuth, IFirebaseAuthToken } from "@/infra/services/firebase";

export class RemoteFirebaseAuthToken implements IFirebaseAuthToken {
  protected token: string = "";
  private auth: Auth;

  constructor(protected dependencies: IAuth.Dependencies<Auth>) {
    this.auth = dependencies.auth;
  }

  async getFirebaseAuthToken(): Promise<string> {
    try {
      this.token = (await this.auth.currentUser?.getIdToken()) || "";
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        this.token = error.message;
      }
    }

    return this.token;
  }
}

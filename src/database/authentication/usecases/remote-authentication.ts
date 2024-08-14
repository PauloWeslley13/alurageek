import { User } from "firebase/auth";
import { IAuth, IFirebaseAuthToken } from "@/infra/services/firebase";
import { UserRepoFactory } from "@/database/user";
import { RemoteErrorMessage } from "@/database/errors";
import { IAuthentication } from "@/domain/contracts";
import { AccountModel } from "@/domain/models";

interface RemoteAuthenticationDependencies {
  auth: IAuth.FirebaseSignIn;
  token: IFirebaseAuthToken;
}

export class RemoteAuthentication implements IAuthentication {
  private userFactory = new UserRepoFactory.Create();
  private status = new RemoteErrorMessage();
  private auth: IAuth.FirebaseSignIn;
  private token: IFirebaseAuthToken;

  constructor(protected dependencies: RemoteAuthenticationDependencies) {
    this.auth = dependencies.auth;
    this.token = dependencies.token;
  }

  async authentication(
    params: IAuthentication.Params,
  ): Promise<RemoteAuthentication.Model> {
    const { userCredential, error } = await this.auth.authSignIn(params);
    const token = await this.token.getFirebaseAuthToken();
    const user = userCredential?.user;
    const hasStatusError = this.status.getErrorMessage(error?.code);

    return error?.code ? hasStatusError : this.authBuilder(user, token);
  }

  private authBuilder(params: User | undefined, token: string): AccountModel {
    const { user } = this.userFactory.add({
      id: params?.uid || "",
      email: params?.email || "",
      username: params?.displayName || "",
      photoUrl: params?.photoURL || "",
      accessToken: token || "",
    });
    return user;
  }
}

export namespace RemoteAuthentication {
  export type Model = IAuthentication.Model;
}

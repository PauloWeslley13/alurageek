import { UserCredential } from "firebase/auth";
import { IAuth } from "@/infra/services/firebase";
import { RemoteErrorMessage } from "@/database/errors";
import { IAddAccount, IUser } from "@/domain/contracts";

interface RemoteAddAccountDependencies {
  auth: IAuth.FirebaseSignUp;
  user: IUser;
}

export class RemoteAddAccount implements IAddAccount {
  private status = new RemoteErrorMessage();
  private auth: IAuth.FirebaseSignUp;
  private user: IUser;

  constructor(protected dependencies: RemoteAddAccountDependencies) {
    this.auth = dependencies.auth;
    this.user = dependencies.user;
  }

  async register(params: IAddAccount.Params): Promise<RemoteAddAccount.Model> {
    const { userCredential, error } = await this.auth.authSignUp(params);
    const hasStatusError = this.status.getErrorMessage(error?.code);

    if (error?.code) {
      return hasStatusError;
    }

    return await this.user.create({
      data: userCredential || ({} as UserCredential),
      username: params.username,
      photoUrl: params.photoUrl,
    });
  }
}

export namespace RemoteAddAccount {
  export type Model = IAddAccount.Model;
}

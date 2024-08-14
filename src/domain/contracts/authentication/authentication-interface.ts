import { FirebaseError } from "firebase/app";
import { IFirebaseAuth } from "@/infra/services/firebase";
import { AccountModel } from "@/domain/models";

export namespace IAuthentication {
  export type Params = IFirebaseAuth.Params;

  export type Model = AccountModel | FirebaseError;
}

export interface IAuthentication {
  authentication(
    params: IAuthentication.Params,
  ): Promise<IAuthentication.Model>;
}

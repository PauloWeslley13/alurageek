import { FirebaseError } from "firebase/app";
import { IFirebaseAuth } from "@/infra/services/firebase";
import { AccountModel } from "@/domain/models";

export namespace IAddAccount {
  export type Params = IFirebaseAuth.Params & {
    username: string;
    photoUrl: string;
  };

  export type Model = AccountModel | FirebaseError;
}

export interface IAddAccount {
  register(params: IAddAccount.Params): Promise<IAddAccount.Model>;
}

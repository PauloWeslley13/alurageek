import { RemoteAddAccount } from "@/database/add-account";
import { IAddAccount } from "@/domain/contracts";
import { makeRemoteDatabaseAuthSignUp } from "@/main/factories/data";
import { makeRemoteUser } from "@/main/factories/usecases";

export const makeRemoteAddAccount = (): IAddAccount => {
  return new RemoteAddAccount({
    auth: makeRemoteDatabaseAuthSignUp(),
    user: makeRemoteUser(),
  });
};

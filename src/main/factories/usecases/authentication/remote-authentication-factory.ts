import { RemoteAuthentication } from "@/database/authentication";
import { IAuthentication } from "@/domain/contracts";
import {
  makeRemoteDatabaseAuthSignIn,
  makeRemoteDatabaseAuthToken,
} from "@/main/factories/data";

export const makeRemoteAuthentication = (): IAuthentication => {
  return new RemoteAuthentication({
    auth: makeRemoteDatabaseAuthSignIn(),
    token: makeRemoteDatabaseAuthToken(),
  });
};

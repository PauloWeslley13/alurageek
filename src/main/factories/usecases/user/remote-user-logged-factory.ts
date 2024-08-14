import { RemoteUserLogged } from "@/database/user";
import { IUserLogged } from "@/domain/contracts";
import {
  makeRemoteDatabase,
  makeRemoteDatabaseAuthToken,
} from "@/main/factories/data";

export const makeRemoteUserLogged = (): IUserLogged => {
  return new RemoteUserLogged({
    database: makeRemoteDatabase(),
    authToken: makeRemoteDatabaseAuthToken(),
  });
};

import {
  IFirebaseAuthToken,
  RemoteFirebaseAuthToken,
} from "@/infra/services/firebase";
import { makeRemoteDatabase } from "@/main/factories/data";

export const makeRemoteDatabaseAuthToken = (): IFirebaseAuthToken => {
  return new RemoteFirebaseAuthToken({ auth: makeRemoteDatabase().auth() });
};

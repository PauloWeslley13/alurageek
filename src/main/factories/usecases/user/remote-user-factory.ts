import { RemoteUser } from "@/database/user";
import { IUser } from "@/domain/contracts";
import { makeRemoteDatabase } from "@/main/factories/data";

export const makeRemoteUser = (): IUser => {
  return new RemoteUser({ database: makeRemoteDatabase() });
};

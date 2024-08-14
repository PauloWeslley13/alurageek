import { RemoteProductCreate } from "@/database/product";
import { IProductCreate } from "@/domain/contracts";
import { COLLECTIONS } from "@/infra/services/firebase";
import {
  makeRemoteDatabase,
  makeRemoteFirebaseCreate,
} from "@/main/factories/data";

export const makeRemoteProductCreate = (): IProductCreate => {
  const firestore = makeRemoteFirebaseCreate<
    IProductCreate.Params,
    IProductCreate.Model
  >(makeRemoteDatabase(), COLLECTIONS.PRODUCTS);

  return new RemoteProductCreate({ firestore });
};

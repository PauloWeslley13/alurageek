import { RemoteProductUpdate } from "@/database/product";
import { IProductCreate, IProductUpdate } from "@/domain/contracts";
import { COLLECTIONS } from "@/infra/services/firebase";
import {
  makeRemoteDatabase,
  makeRemoteFirebaseUpdate,
} from "@/main/factories/data";

export const makeRemoteProductUpdate = (): IProductUpdate => {
  const firestore = makeRemoteFirebaseUpdate<
    IProductCreate.Params,
    IProductCreate.Model
  >(makeRemoteDatabase(), COLLECTIONS.PRODUCTS);

  return new RemoteProductUpdate({ firestore });
};

import { RemoteProductDelete } from "@/database/product";
import { IProductDelete } from "@/domain/contracts";
import { COLLECTIONS } from "@/infra/services/firebase";
import {
  makeRemoteDatabase,
  makeRemoteFirebaseDelete,
} from "@/main/factories/data";

export const makeRemoteProductDelete = (): IProductDelete => {
  const firestore = makeRemoteFirebaseDelete<IProductDelete.Params>(
    makeRemoteDatabase(),
    COLLECTIONS.PRODUCTS,
  );

  return new RemoteProductDelete({ firestore });
};

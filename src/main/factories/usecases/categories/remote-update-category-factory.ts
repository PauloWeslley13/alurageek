import { RemoteCategoryUpdate } from "@/database/category";
import { ICategoryUpdate } from "@/domain/contracts";
import { COLLECTIONS } from "@/infra/services/firebase";
import {
  makeRemoteDatabase,
  makeRemoteFirebaseUpdate,
} from "@/main/factories/data";

export const makeRemoteCategoryUpdated = (): ICategoryUpdate => {
  const firestore = makeRemoteFirebaseUpdate<
    ICategoryUpdate.Params,
    ICategoryUpdate.Model
  >(makeRemoteDatabase(), COLLECTIONS.CATEGORIES);

  return new RemoteCategoryUpdate({ firestore });
};

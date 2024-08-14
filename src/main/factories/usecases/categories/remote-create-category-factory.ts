import { RemoteCategoryCreate } from "@/database/category";
import { ICategoryCreate } from "@/domain/contracts";
import { COLLECTIONS } from "@/infra/services/firebase";
import {
  makeRemoteDatabase,
  makeRemoteFirebaseCreate,
} from "@/main/factories/data";

export const makeRemoteCategoryCreate = (): ICategoryCreate => {
  const firestore = makeRemoteFirebaseCreate<
    ICategoryCreate.Params,
    ICategoryCreate.Model
  >(makeRemoteDatabase(), COLLECTIONS.CATEGORIES);

  return new RemoteCategoryCreate({ firestore });
};

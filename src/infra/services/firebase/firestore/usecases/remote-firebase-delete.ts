/* eslint-disable prettier/prettier */
import { deleteDoc, doc } from "firebase/firestore";
import {
  COLLECTIONS,
  IFirebase,
  IFirestore,
  IFirestoreDelete,
} from "@/infra/services/firebase";

type RemoteFirebaseCreateDependencies = {
  database: IFirebase;
  collection: COLLECTIONS;
};

export class RemoteFirebaseDelete<P extends IFirestore.Params>
  implements IFirestoreDelete<P>
{
  private database: IFirebase;
  private collection: COLLECTIONS;

  constructor(protected dependencies: RemoteFirebaseCreateDependencies) {
    this.database = dependencies.database;
    this.collection = dependencies.collection;
  }

  async delete(params: P): Promise<void> {
    const productRemoveRef = doc(
      this.database.getDB(),
      this.collection,
      params.body.productId,
    );

    await deleteDoc(productRemoveRef);
  }
}

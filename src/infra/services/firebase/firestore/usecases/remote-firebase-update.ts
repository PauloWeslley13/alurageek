/* eslint-disable prettier/prettier */
import { doc, updateDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import {
  COLLECTIONS,
  FirebaseResponse,
  IFirebase,
  IFirestore,
  IFirestoreUpdate,
} from "@/infra/services/firebase";

type RemoteFirebaseUpdateDependencies = {
  database: IFirebase;
  collection: COLLECTIONS;
};

export class RemoteFirebaseUpdate<P extends IFirestore.Params, R>
  implements IFirestoreUpdate<P, R>
{
  protected response: FirebaseResponse<R>;
  private database: IFirebase;
  private collection: COLLECTIONS;

  constructor(protected dependencies: RemoteFirebaseUpdateDependencies) {
    this.database = dependencies.database;
    this.collection = dependencies.collection;
    this.response = { data: {} as R };
  }

  async updated(params: P): Promise<IFirestore.Model<R>> {
    await updateDoc(
      doc(this.database.getDB(), this.collection, params.body.id),
      params.body,
    )
      .then(() => {
        this.response.data = { ...params.body } as R;
      })
      .catch((err: unknown) => {
        if (err instanceof FirebaseError) {
          this.response.data = err as R;
          console.log("error", this.response);
        }
      });

    return this.response;
  }
}

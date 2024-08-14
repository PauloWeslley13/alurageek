/* eslint-disable prettier/prettier */
import { addDoc, DocumentReference } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import {
  COLLECTIONS,
  FirebaseResponse,
  IFirebase,
  IFirestore,
  IFirestoreCreate,
} from "@/infra/services/firebase";

type RemoteFirebaseCreateDependencies = {
  database: IFirebase;
  collection: COLLECTIONS;
};

export class RemoteFirebaseCreate<P extends IFirestore.Params, R>
  implements IFirestoreCreate<P, R>
{
  protected response: FirebaseResponse<R>;
  private database: IFirebase;
  private collection: COLLECTIONS;

  constructor(protected dependencies: RemoteFirebaseCreateDependencies) {
    this.database = dependencies.database;
    this.collection = dependencies.collection;
    this.response = { data: {} as R };
  }

  async create(params: P): Promise<IFirestore.Model<R>> {
    await addDoc(this.database.collection(this.collection), params.body)
      .then((data: DocumentReference) => {
        this.response.data = { id: data.id, ...params.body } as R;
      })
      .catch((err: unknown) => {
        if (err instanceof FirebaseError) {
          this.response.data = err as R;
        }
      });

    console.log("response", this.response);
    return this.response;
  }
}

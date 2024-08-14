import {
  COLLECTIONS,
  IFirebase,
  IFirestore,
  IFirestoreDelete,
  RemoteFirebaseDelete,
} from "@/infra/services/firebase";

export function makeRemoteFirebaseDelete<P extends IFirestore.Params>(
  database: IFirebase,
  collection: COLLECTIONS,
): IFirestoreDelete<P> {
  return new RemoteFirebaseDelete<P>({ database, collection });
}

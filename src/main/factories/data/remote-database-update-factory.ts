import {
  COLLECTIONS,
  IFirebase,
  IFirestore,
  IFirestoreUpdate,
  RemoteFirebaseUpdate,
} from "@/infra/services/firebase";

export function makeRemoteFirebaseUpdate<P extends IFirestore.Params, R>(
  database: IFirebase,
  collection: COLLECTIONS,
): IFirestoreUpdate<P, R> {
  return new RemoteFirebaseUpdate<P, R>({ database, collection });
}

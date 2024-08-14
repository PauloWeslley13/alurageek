import {
  COLLECTIONS,
  IFirebase,
  IFirestore,
  IFirestoreCreate,
  RemoteFirebaseCreate,
} from "@/infra/services/firebase";

export function makeRemoteFirebaseCreate<P extends IFirestore.Params, R>(
  database: IFirebase,
  collection: COLLECTIONS,
): IFirestoreCreate<P, R> {
  return new RemoteFirebaseCreate<P, R>({ database, collection });
}

import { IFirestore } from "./firestore-interface";

export interface IFirestoreUpdate<P, R> {
  updated(params: P): Promise<IFirestore.Model<R>>;
}

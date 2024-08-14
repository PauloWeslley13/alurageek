import { IFirestore } from "./firestore-interface";

export interface IFirestoreCreate<P, R> {
  create(params: P): Promise<IFirestore.Model<R>>;
}

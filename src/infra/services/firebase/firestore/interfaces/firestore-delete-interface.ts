export interface IFirestoreDelete<P> {
  delete(params: P): Promise<void>;
}

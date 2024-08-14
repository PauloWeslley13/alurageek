export type FirebaseResponse<R> = {
  data: R;
};

export namespace IFirestore {
  export interface Params {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any;
  }

  export type Model<R> = FirebaseResponse<R>;
}

export namespace IProductDelete {
  export type Params = {
    body: { productId: string };
  };
}

export interface IProductDelete {
  deleteProduct(params: IProductDelete.Params): Promise<void>;
}

import { ProductModel } from "@/domain/models";

export namespace IProductUpdate {
  export type Params = {
    body: ProductModel;
  };

  export type Model = ProductModel;
}

export interface IProductUpdate {
  updatedProduct(params: IProductUpdate.Params): Promise<IProductUpdate.Model>;
}

import { ProductModel } from "@/domain/models";

export namespace IProductCreate {
  export type Params = {
    body: Omit<ProductModel, "id">;
  };

  export type Model = ProductModel;
}

export interface IProductCreate {
  createProduct(params: IProductCreate.Params): Promise<IProductCreate.Model>;
}

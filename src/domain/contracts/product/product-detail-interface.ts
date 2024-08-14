import { ProductModel } from "@/domain/models";

export namespace IProductDetail {
  export type Params = {
    productId: string;
  };

  export type Model = ProductModel;
}

export interface IProductDetail {
  getProductDetail(
    params: IProductDetail.Params,
  ): Promise<IProductDetail.Model>;
}

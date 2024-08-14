import { ProductModel } from "@/domain/models";

export namespace IProductList {
  export type Model = ProductModel;
}

export interface IProductList {
  getProductList(): Promise<IProductList.Model[]>;
}

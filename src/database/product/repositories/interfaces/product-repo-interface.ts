import { ProductModel } from "@/domain/models";

export namespace IProductRepo {
  export type Model = ProductModel;
}

export interface IProductRepo {
  product: IProductRepo.Model;
}

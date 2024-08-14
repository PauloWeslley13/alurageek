import { IProductRepo, ProductRepo } from "@/database/product";

export namespace ProductRepoFactory {
  export class Create {
    add(params: IProductRepo.Model): IProductRepo {
      return new ProductRepo(params);
    }
  }
}

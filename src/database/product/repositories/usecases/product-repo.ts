import { IProductRepo } from "@/database/product";

export class ProductRepo implements IProductRepo {
  public product: IProductRepo.Model;

  constructor(props: IProductRepo.Model) {
    this.product = props;
  }
}

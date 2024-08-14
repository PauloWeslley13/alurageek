import { RemoteProductList } from "@/database/product";
import { IProductList } from "@/domain/contracts";
import { makeRemoteDatabase } from "@/main/factories/data";

export const makeRemoteProductList = (): IProductList => {
  return new RemoteProductList({ database: makeRemoteDatabase() });
};

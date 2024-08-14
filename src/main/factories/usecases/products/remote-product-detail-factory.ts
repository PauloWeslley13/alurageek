import { RemoteProductDetail } from "@/database/product";
import { IProductDetail } from "@/domain/contracts";
import { makeRemoteDatabase } from "@/main/factories/data";

export const makeRemoteProductDetail = (): IProductDetail => {
  return new RemoteProductDetail({ database: makeRemoteDatabase() });
};

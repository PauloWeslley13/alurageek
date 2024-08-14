import { RemoteCategoryList } from "@/database/category";
import { ICategoryList } from "@/domain/contracts";
import { makeRemoteDatabase } from "@/main/factories/data";

export const makeRemoteCategoryList = (): ICategoryList => {
  return new RemoteCategoryList({ database: makeRemoteDatabase() });
};

import { CategoryModel } from "@/domain/models";

export namespace ICategoryList {
  export type Model = CategoryModel;
}

export interface ICategoryList {
  getCategoryList(): Promise<ICategoryList.Model[]>;
}

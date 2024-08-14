import { CategoryModel } from "@/domain/models";

export namespace ICategoryUpdate {
  export type Params = {
    body: {
      id: string;
      name: string;
    };
  };

  export type Model = CategoryModel;
}

export interface ICategoryUpdate {
  updatedCategory(
    params: ICategoryUpdate.Params,
  ): Promise<ICategoryUpdate.Model>;
}

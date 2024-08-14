import { CategoryModel } from "@/domain/models";

export namespace ICategoryCreate {
  export type Params = {
    body: {
      name: string;
    };
  };

  export type Model = CategoryModel;
}

export interface ICategoryCreate {
  createCategory(
    params: ICategoryCreate.Params,
  ): Promise<ICategoryCreate.Model>;
}

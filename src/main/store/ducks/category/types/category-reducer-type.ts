import { CategoryModel } from "@/domain/models";
import { ReducerStateType } from "@/main/store/types/reducer-type";

export namespace Category {
  export type StateProps = ReducerStateType & {
    categories: CategoryModel[] | [];
  };

  export type Params = ReducerStateType & {
    category: CategoryModel | null;
  };

  export type ErrorParams = ReducerStateType;
}

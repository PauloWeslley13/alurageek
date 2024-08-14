import { IProductDelete } from "@/domain/contracts";
import { ProductModel } from "@/domain/models";
import { ReducerStateType } from "@/main/store/types/reducer-type";

export namespace Product {
  export type StateProps = ReducerStateType & {
    products: ProductModel[] | [];
  };

  export type Params = ReducerStateType & {
    product: ProductModel | null;
  };

  export type DeleteParams = ReducerStateType & IProductDelete.Params;

  export type ErrorParams = ReducerStateType;

  export type DetailStateProps = ReducerStateType & {
    product: ProductModel;
  };
}

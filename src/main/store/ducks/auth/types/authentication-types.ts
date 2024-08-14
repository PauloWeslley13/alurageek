import { AccountModel } from "@/domain/models";
import { ReducerStateType } from "@/main/store/types/reducer-type";

export namespace PayloadParams {
  export type AuthSuccess = {
    user: AccountModel;
    error: null;
  };

  export type AuthFailure = {
    error: string;
    isLoading: boolean;
  };
}

export type AuthStateProps = ReducerStateType & {
  user: AccountModel | null;
};

import { ActionCreatorWithPayload, createAction } from "@reduxjs/toolkit";
import { IAuthentication } from "@/domain/contracts";

export const loadAuth: ActionCreatorWithPayload<
  IAuthentication.Params,
  string
> = createAction<IAuthentication.Params>("auth/loadAuth");

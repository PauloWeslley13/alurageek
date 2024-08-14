import { ActionCreatorWithPayload, createAction } from "@reduxjs/toolkit";
import { IAddAccount } from "@/domain/contracts";

export const loadAddAccount: ActionCreatorWithPayload<
  IAddAccount.Params,
  string
> = createAction<IAddAccount.Params>("addAccount/loadAddAccount");

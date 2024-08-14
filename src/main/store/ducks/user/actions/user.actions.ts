import { ActionCreatorWithPayload, createAction } from "@reduxjs/toolkit";
import { IUserLogged } from "@/domain/contracts";

export const loadUser: ActionCreatorWithPayload<IUserLogged.Params, string> =
  createAction<IUserLogged.Params>("user/loadUser");

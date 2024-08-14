import { ActionCreatorWithPayload, createAction } from "@reduxjs/toolkit";
import {
  IProductCreate,
  IProductDelete,
  IProductDetail,
  IProductUpdate,
} from "@/domain/contracts";

export const loadProduct = createAction("product/loadProduct");

export const loadProductCreate: ActionCreatorWithPayload<
  IProductCreate.Params,
  string
> = createAction<IProductCreate.Params>("product/createProduct");

export const loadProductUpdate: ActionCreatorWithPayload<
  IProductUpdate.Params,
  string
> = createAction<IProductUpdate.Params>("product/updateProduct");

export const loadProductDelete: ActionCreatorWithPayload<
  IProductDelete.Params,
  string
> = createAction<IProductDelete.Params>("product/deleteProduct");

export const loadProductInfo: ActionCreatorWithPayload<
  IProductDetail.Params,
  string
> = createAction<IProductDetail.Params>("product/productDetail");

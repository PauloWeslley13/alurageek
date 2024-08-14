import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  createProduct,
  isPendingProduct,
  loadProductCreate,
  onErrorProduct,
} from "@/main/store/ducks/products";
import { makeRemoteProductCreate } from "@/main/factories/usecases";
import { ProductModel } from "@/domain/models";
import { toasts } from "@/presenter/components/ui";
import { RootState } from "@/main/store/types/types";
import { IProductCreate } from "@/domain/contracts";

async function makeAddProduct(
  params: IProductCreate.Params,
): Promise<ProductModel> {
  const product = makeRemoteProductCreate();
  const response = await product.createProduct(params);
  return response;
}

function* createProductSaga({ payload }: PayloadAction<IProductCreate.Params>) {
  yield delay(1000);
  yield put(isPendingProduct(true));
  const {
    products: { products },
  }: RootState = yield select();

  try {
    const hasExistsProduct =
      products.length > 0 &&
      products.some((prod) => prod.name === payload.body.name);

    if (hasExistsProduct) {
      yield put(
        onErrorProduct({ isLoading: true, error: "Produto já cadastrado" }),
      );
      return toasts.error({ title: "Produto já cadastrado" });
    }

    const product: ProductModel = yield call(makeAddProduct, payload);
    yield put(createProduct({ product, isLoading: false, error: null }));
    toasts.success({ title: "Produto cadastro!" });
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorProduct({ isLoading: true, error: error.message }));
      return toasts.error({ title: error.message });
    }
  } finally {
    yield put(isPendingProduct(false));
  }
}

export function* addProductSaga() {
  yield takeLatest(loadProductCreate, createProductSaga);
}

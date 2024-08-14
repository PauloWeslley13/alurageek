import { call, delay, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  isPendingProduct,
  loadProductUpdate,
  onErrorProduct,
  updateProduct,
} from "@/main/store/ducks/products";
import { makeRemoteProductUpdate } from "@/main/factories/usecases";
import { ProductModel } from "@/domain/models";
import { toasts } from "@/presenter/components/ui";
import { IProductUpdate } from "@/domain/contracts";

async function makeUpdateProduct(
  params: IProductUpdate.Params,
): Promise<ProductModel> {
  const product = makeRemoteProductUpdate();
  const response = await product.updatedProduct(params);
  console.log("Res", response);
  return response;
}

function* updateProductSaga({ payload }: PayloadAction<IProductUpdate.Params>) {
  console.log("payload", payload);
  yield delay(1000);
  yield put(isPendingProduct(true));

  try {
    const product: ProductModel = yield call(makeUpdateProduct, payload);
    yield put(updateProduct({ product, isLoading: false, error: null }));
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorProduct({ isLoading: true, error: error.message }));
      return toasts.error({ title: error.message });
    }
  } finally {
    yield put(isPendingProduct(false));
  }
}

export function* updatedProductSaga() {
  yield takeLatest(loadProductUpdate, updateProductSaga);
}

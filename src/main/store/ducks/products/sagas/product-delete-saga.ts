import { call, delay, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  deleteProduct,
  isPendingProduct,
  loadProductDelete,
  onErrorProduct,
} from "@/main/store/ducks/products";
import { makeRemoteProductDelete } from "@/main/factories/usecases";
import { toasts } from "@/presenter/components/ui";
import { IProductDelete } from "@/domain/contracts";

async function makeDeleteProduct(params: IProductDelete.Params): Promise<void> {
  const product = makeRemoteProductDelete();
  await product.deleteProduct(params);
}

function* deleteProductSaga({ payload }: PayloadAction<IProductDelete.Params>) {
  yield delay(1000);
  yield put(isPendingProduct(true));

  try {
    yield call(makeDeleteProduct, payload);
    yield put(
      deleteProduct({
        body: { ...payload.body },
        isLoading: false,
        error: null,
      }),
    );
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorProduct({ isLoading: true, error: error.message }));
      return toasts.error({ title: error.message });
    }
  }
}

export function* removeProductSaga() {
  yield takeLatest(loadProductDelete, deleteProductSaga);
}

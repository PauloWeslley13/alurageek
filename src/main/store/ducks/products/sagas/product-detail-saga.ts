import { call, delay, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  loadProductInfo,
  productDetailIsError,
  productDetailIsPending,
  productDetailSuccess,
} from "@/main/store/ducks/products";
import { makeRemoteProductDetail } from "@/main/factories/usecases";
import { ProductModel } from "@/domain/models";
import { toasts } from "@/presenter/components/ui";
import { IProductDetail } from "@/domain/contracts";

async function makeProductDetail(
  params: IProductDetail.Params,
): Promise<ProductModel> {
  const product = makeRemoteProductDetail();
  const response = await product.getProductDetail(params);
  return response;
}

function* getProductDetailSaga({
  payload,
}: PayloadAction<IProductDetail.Params>) {
  yield delay(1000);
  yield put(productDetailIsPending(true));
  try {
    const product: ProductModel = yield call(makeProductDetail, payload);
    yield put(productDetailSuccess(product));
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(productDetailIsError(error.message));
      return toasts.error({ title: error.message });
    }
  } finally {
    yield put(productDetailIsPending(false));
  }
}

export function* productDetailSaga() {
  yield takeLatest(loadProductInfo, getProductDetailSaga);
}

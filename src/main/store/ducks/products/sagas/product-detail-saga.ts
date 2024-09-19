import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  loadProductInfo,
  productDetailIsError,
  productDetailIsPending,
  productDetailSuccess,
  productService,
} from '@/main/store/ducks/products'
import { ProductModel } from '@/data/models'
import { toasts } from '@/presenter/components/ui'
import { IProductDetail } from '@/data/usecases'

function* getProductDetailSaga({
  payload,
}: PayloadAction<IProductDetail.Params>) {
  yield put(productDetailIsPending(true))

  try {
    yield delay(1000)
    const product: ProductModel = yield call(
      productService.getProductById,
      payload,
    )

    yield put(productDetailSuccess(product))
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(productDetailIsError(error.message))
      yield toasts.error({ title: error.message })
      return
    }
  } finally {
    yield put(productDetailIsPending(false))
  }
}

export function* productDetailSaga() {
  yield takeLatest(loadProductInfo, getProductDetailSaga)
}

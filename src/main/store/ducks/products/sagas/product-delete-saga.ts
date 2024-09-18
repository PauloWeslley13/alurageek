import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  deleteProduct,
  isPendingProduct,
  loadProductDelete,
  onErrorProduct,
  productService,
} from '@/main/store/ducks/products'
import { toasts } from '@/presenter/components/ui'
import { IProductDelete } from '@/data/usecases'

function* deleteProductSaga({ payload }: PayloadAction<IProductDelete.Params>) {
  yield put(isPendingProduct(true))

  try {
    yield delay(1000)

    yield call(productService.delete, payload)

    yield put(deleteProduct({ productId: payload.productId }))
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorProduct({ isLoading: true, error: error.message }))
      return toasts.error({ title: error.message })
    }
  } finally {
    yield put(isPendingProduct(false))
  }
}

export function* removeProductSaga() {
  yield takeLatest(loadProductDelete, deleteProductSaga)
}

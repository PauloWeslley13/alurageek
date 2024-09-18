import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  isPendingProduct,
  loadProductUpdate,
  onErrorProduct,
  productService,
  updateProduct,
} from '@/main/store/ducks/products'
import { toasts } from '@/presenter/components/ui'
import { IProductUpdate } from '@/data/usecases'

function* updateProductSaga({ payload }: PayloadAction<IProductUpdate.Params>) {
  yield delay(1000)
  yield put(isPendingProduct(true))

  try {
    const { data, error }: IProductUpdate.Model = yield call(
      productService.put,
      payload,
    )

    if (error) {
      yield put(onErrorProduct({ isLoading: true, error: error.message }))
      toasts.error({ title: error.message })
      return
    }

    if (!data) {
      yield put(
        onErrorProduct({
          isLoading: true,
          error: 'Error ao atualizar produto',
        }),
      )
      toasts.error({ title: 'Error ao atualizar produto' })
      return
    }

    yield put(updateProduct({ product: data }))
    toasts.success({ title: 'Produto atualizado!' })
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorProduct({ isLoading: true, error: error.message }))
      toasts.error({ title: error.message })
      return
    }
  } finally {
    yield put(isPendingProduct(false))
  }
}

export function* updatedProductSaga() {
  yield takeLatest(loadProductUpdate, updateProductSaga)
}

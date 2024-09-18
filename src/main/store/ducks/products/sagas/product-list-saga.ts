import { call, cancel, delay, put, takeLatest } from 'redux-saga/effects'
import { Task } from 'redux-saga'
import {
  getProducts,
  isPendingProduct,
  loadProduct,
  onErrorProduct,
  productService,
} from '@/main/store/ducks/products'
import { ProductModel } from '@/data/models'
import { toasts } from '@/presenter/components/ui'

function* fetchProductListSaga() {
  yield put(isPendingProduct(true))

  try {
    yield delay(1000)
    const products: ProductModel[] = yield call(productService.getProductAll)

    yield put(getProducts(products))
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorProduct({ isLoading: true, error: error.message }))
      yield toasts.error({ title: error.message })
      return
    }
  } finally {
    yield put(isPendingProduct(false))
  }
}

export function* productListSaga() {
  const task: Task = yield takeLatest(loadProduct, fetchProductListSaga)
  yield takeLatest(getProducts, function* () {
    yield cancel(task)
  })
}

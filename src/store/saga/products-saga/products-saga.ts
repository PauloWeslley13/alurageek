import { call, cancel, delay, put, takeLatest } from 'redux-saga/effects'
import { ProductsProps } from '@/components/types'
import productsService from '@/services/get-products'
import { getProducts } from '@/store/reducers'
import { loadProduct } from '@/store/actions/actions'

// TODO: função Worker, função que observar uma action
function* observableProducts() {
  try {
    yield delay(1000)
    const products: ProductsProps[] = yield call(productsService.get)
    yield put(getProducts({ products, isLoading: false }))
  } catch (error) {
    yield put(getProducts({ products: [], isLoading: true }))
  }
}

// TODO: função Watcher
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function* productsSaga(): any {
  const task = yield takeLatest(loadProduct, observableProducts)
  yield takeLatest(getProducts, function* () {
    yield cancel(task)
  })
}

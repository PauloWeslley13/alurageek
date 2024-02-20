import { ForkEffect, call, delay, put, takeEvery } from 'redux-saga/effects'
import { toasts } from '@/components/ui'
import { ProductsProps } from '@/components/types'
import productsService from '@/services/get-products'
import { getProducts } from '@/store/reducers'

// TODO: função Worker, função que observar uma action
function* observableProducts() {
  toasts.loader()
  try {
    yield delay(1000)
    const products: ProductsProps[] = yield call(productsService.get)
    yield put(getProducts(products))
    console.log('products ==> ', products)
    toasts.success({ title: 'sucesso' })
  } catch (error) {
    toasts.error({ title: 'erro' })
  }
}

type ProductsSagaProps = Generator<ForkEffect<never>, void, unknown>

// TODO: função Watcher
export function* productsSaga(): ProductsSagaProps {
  yield takeEvery(getProducts, observableProducts)

  // const task = yield takeLatest(loadProduct, observableProducts)
  // yield takeLatest(getProducts, () => task.)
}

import { call, cancel, delay, put, takeLatest } from 'redux-saga/effects'
import { ProductUseCase } from '@/domain/product/usecases/product-use-cases'
import { ProductsProps } from '@/presenter/components/types'
import { getProducts } from '@/main/store/reducers'
import { loadProduct } from '@/main/store/actions/actions'

const makeProduct = (): ProductUseCase => new ProductUseCase()

// TODO: função Worker, função que observar uma action
function* observableProducts() {
  const product = makeProduct()

  try {
    yield delay(1000)
    const products: ProductsProps[] = yield call(product.getProductList)
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

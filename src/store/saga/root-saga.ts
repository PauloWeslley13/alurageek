import { all } from 'redux-saga/effects'
import { productsSaga } from './products-saga/products-saga'

export function* rootSaga() {
  yield all([productsSaga()])
}

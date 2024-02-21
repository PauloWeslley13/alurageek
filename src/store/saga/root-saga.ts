import { all } from 'redux-saga/effects'
import { productsSaga } from './products-saga/products-saga'
import { userLoggedSaga } from './user-saga/user-saga'

export function* rootSaga() {
  yield all([productsSaga(), userLoggedSaga()])
}

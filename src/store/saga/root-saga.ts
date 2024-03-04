import { all } from 'redux-saga/effects'
import { productsSaga } from './products-saga/products-saga'
import { userLoggedSaga } from './user-saga/user-saga'
import { cartsSaga } from './carts-saga/carts-saga'
import { categoriesSaga } from './category-saga/category-saga'

export function* rootSaga() {
  yield all([productsSaga(), userLoggedSaga(), cartsSaga(), categoriesSaga()])
}

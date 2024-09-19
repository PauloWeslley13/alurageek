import {
  call,
  cancel,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { Task } from 'redux-saga'
import {
  addToCart,
  calcTotalPrice,
  cartServices,
  getCart,
  handleQuantity,
  loadCart,
  loadSavedCart,
  loadUserCartSaved,
  resetCart,
} from '@/main/store/ducks/cart'
import { RootState } from '@/main/store/types/types'
import { CartType } from '@/presenter/components/types'
import {
  getCartUserAdapter,
  removeCartUserAdapter,
  setCartUserAdapter,
} from '@/main/adapters'
import { ICartSaved } from '@/data/usecases'
import { toasts } from '@/presenter/components/ui'
import { openSnackbar } from '@/main/store/ducks/snackbar'

function* shopCartSaga({ payload }: PayloadAction<CartType>) {
  try {
    yield delay(1000)

    const { data, error }: ICartSaved.Model = yield call(
      cartServices.savedCartUser,
      payload,
    )

    if (error) {
      return
    }

    if (!data) {
      return
    }

    yield put(getCart(data))
    yield put(openSnackbar(true))
    yield put(resetCart())
    removeCartUserAdapter()
  } catch (error) {
    if (error instanceof TypeError) {
      toasts.error({ title: error.message })
    }
  }
}

function* savedShopCartSaga({ payload }: PayloadAction<CartType>) {
  yield setCartUserAdapter(payload)
}

function* loadUserCartSaveSaga() {
  if (!getCartUserAdapter()) {
    yield put(getCart({ userId: '', cart: [], totalPrice: 0 }))
    return
  }

  yield put(getCart(getCartUserAdapter()))
}

function* loadCalcAllSaga() {
  yield delay(500)
  const { products, cart }: RootState = yield select()
  const productsAll = products.products
  const cartProducts = cart.cart

  const all = cartProducts.reduce((all, itemCart) => {
    const product = productsAll.find((item) => item.id === itemCart.id)
    const price = product ? product.price : 0

    return all + price * itemCart.quantity
  }, 0)

  yield put(calcTotalPrice(all))
}

export function* cartSaga() {
  yield takeLatest(loadCart, shopCartSaga)
  yield takeEvery([handleQuantity, addToCart], loadCalcAllSaga)
  yield takeLatest(loadSavedCart, savedShopCartSaga)
  const task: Task = yield takeLatest(loadUserCartSaved, loadUserCartSaveSaga)
  yield takeLatest(getCart, function* () {
    yield cancel(task)
  })
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, cancel, put, takeLatest } from 'redux-saga/effects'
import { CartType, ProductsCart } from '@/presenter/components/types'
import { getCart } from '@/main/store/reducers'
import { loadCart } from '@/main/store/actions/actions'
import { CartUseCase } from '@/domain/cart/usecases/cart-use-cases'

const makeCartUser = () => new CartUseCase()

// TODO: função Worker, função que observar uma action
function* observableCarts(action: any) {
  const userId = action.payload! as string
  const cartUser = makeCartUser()

  try {
    const carts: CartType = yield call(cartUser.getCartByUserId, userId)

    if (carts) {
      const userCart = {
        cart: carts.cart,
        userId: carts.userId,
        totalPrice: carts.totalPrice,
      } as CartType

      console.log('userCart', userCart)

      yield put(getCart(userCart))
    }

    yield put(
      getCart({
        cart: [] as ProductsCart[],
        userId,
        totalPrice: 0,
      }),
    )
  } catch (error) {
    console.error(error)
    yield put(
      getCart({
        cart: [] as ProductsCart[],
        userId,
        totalPrice: 0,
      }),
    )
  }
}

// TODO: função Watcher
export function* cartsSaga(): any {
  const task = yield takeLatest(loadCart, observableCarts)
  yield takeLatest(getCart, function* () {
    yield cancel(task)
  })
}

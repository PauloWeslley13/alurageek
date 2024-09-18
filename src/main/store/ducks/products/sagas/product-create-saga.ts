import { call, delay, put, select, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  createProduct,
  isPendingProduct,
  loadProductCreate,
  onErrorProduct,
  productService,
} from '@/main/store/ducks/products'
import { toasts } from '@/presenter/components/ui'
import { RootState } from '@/main/store/types/types'
import { IProductCreate } from '@/data/usecases'

function* createProductSaga({ payload }: PayloadAction<IProductCreate.Params>) {
  yield put(isPendingProduct(true))
  const state: RootState = yield select()
  const { products } = state.products

  try {
    yield delay(1000)

    const hasExistsProduct =
      products.length > 0 && products.some((prod) => prod.name === payload.name)

    if (hasExistsProduct) {
      yield put(
        onErrorProduct({ isLoading: true, error: 'Produto já cadastrado' }),
      )
      yield toasts.error({ title: 'Produto já cadastrado' })
      return
    }

    const { data, error }: IProductCreate.Model = yield call(
      productService.post,
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
          error: 'Error ao cadastrar produto',
        }),
      )
      toasts.error({ title: 'Error ao cadastrar produto' })
      return
    }

    yield put(createProduct({ product: data }))
    toasts.success({ title: 'Produto cadastro!' })
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorProduct({ isLoading: true, error: error.message }))
      toasts.error({ title: error.message })
      yield console.log(error.message)
      return
    }
  } finally {
    yield put(isPendingProduct(false))
  }
}

export function* addProductSaga() {
  yield takeLatest(loadProductCreate, createProductSaga)
}

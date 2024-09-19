import { call, delay, put, select, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  categoryServices,
  createCategory,
  isPendingCategory,
  loadCreateCategory,
  onErrorCategory,
} from '@/main/store/ducks/category'
import { toasts } from '@/presenter/components/ui'
import { RootState } from '@/main/store/types/types'
import { ICategoryCreate } from '@/data/usecases'
import { openSnackbar } from '@/main/store/ducks/snackbar'

function* createdCategorySaga({
  payload,
}: PayloadAction<ICategoryCreate.Params>) {
  yield put(isPendingCategory(true))
  const {
    categories: { categories },
  }: RootState = yield select()

  try {
    yield delay(1000)
    const hasExistsCategory =
      categories.length > 0 &&
      categories.some((prod) => prod.name === payload.name)

    if (hasExistsCategory) {
      yield put(
        onErrorCategory({ isLoading: true, error: 'Categoria já cadastrada' }),
      )
      toasts.error({ title: 'Categoria já cadastrada' })
      return
    }

    const { data, error }: ICategoryCreate.Model = yield call(
      categoryServices.post,
      payload,
    )

    if (error) {
      yield put(onErrorCategory({ isLoading: true, error: error.message }))
      toasts.error({ title: error.message })
      return
    }

    if (!data) {
      yield put(
        onErrorCategory({
          isLoading: true,
          error: 'Erro ao cadastrar categoria',
        }),
      )
      toasts.error({ title: 'Erro ao cadastrar categoria' })
      return
    }

    yield put(openSnackbar(true))
    yield put(createCategory({ category: data }))
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorCategory({ isLoading: true, error: error.message }))
      return toasts.error({ title: error.message })
    }
  } finally {
    yield put(isPendingCategory(false))
  }
}

export function* addCategorySaga() {
  yield takeLatest(loadCreateCategory, createdCategorySaga)
}

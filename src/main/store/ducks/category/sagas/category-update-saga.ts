import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  categoryServices,
  isPendingCategory,
  loadUpdateCategory,
  onErrorCategory,
  updateCategory,
} from '@/main/store/ducks/category'
import { toasts } from '@/presenter/components/ui'
import { ICategoryUpdate } from '@/data/usecases'

function* updatedCategory({ payload }: PayloadAction<ICategoryUpdate.Params>) {
  yield put(isPendingCategory(true))

  try {
    yield delay(1000)
    const { data, error }: ICategoryUpdate.Model = yield call(
      categoryServices.put,
      payload,
    )

    if (error) {
      yield put(onErrorCategory({ isLoading: false, error: error.message }))
      toasts.error({ title: error.message })
      return
    }

    if (!data) {
      yield put(
        onErrorCategory({
          isLoading: false,
          error: 'Erro ao atualizar categoria',
        }),
      )
      toasts.error({ title: 'Erro ao atualizar categoria' })
      return
    }

    yield put(updateCategory({ category: data }))
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorCategory({ isLoading: false, error: error.message }))
      return toasts.error({ title: error.message })
    }
  } finally {
    yield put(isPendingCategory(false))
  }
}

export function* updatedCategorySaga() {
  yield takeLatest(loadUpdateCategory, updatedCategory)
}

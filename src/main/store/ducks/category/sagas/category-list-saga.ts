import { call, cancel, delay, put, takeLatest } from 'redux-saga/effects'
import { Task } from 'redux-saga'
import {
  categoryServices,
  getCategories,
  isPendingCategory,
  loadCategories,
  onErrorCategory,
} from '@/main/store/ducks/category'
import { CategoryModel } from '@/data/models'
import { toasts } from '@/presenter/components/ui'

function* getCategoryListSaga() {
  yield put(isPendingCategory(true))

  try {
    yield delay(1000)

    const categories: CategoryModel[] = yield call(
      categoryServices.getCategoryAll,
    )

    yield put(getCategories(categories))
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorCategory({ isLoading: false, error: error.message }))
      toasts.error({ title: error.message })
      return
    }
  } finally {
    yield put(isPendingCategory(false))
  }
}

export function* categoryListSaga() {
  const task: Task = yield takeLatest(loadCategories, getCategoryListSaga)
  yield takeLatest(getCategories, function* () {
    yield cancel(task)
  })
}

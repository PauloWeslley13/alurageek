/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { CategoryUseCase } from '@/domain/category'
import { CategoryProps } from '@/presenter/components/types'
import { getCategories } from '@/main/store/reducers'
import { loadCategories, loadCategory } from '@/main/store/actions/actions'

const makeCategory = (): CategoryUseCase => new CategoryUseCase()

// TODO: função Worker, função que observar uma action
function* observableCategories() {
  const categoryUseCase = makeCategory()

  try {
    yield delay(1000)
    const categories: CategoryProps[] = yield call(
      categoryUseCase.getCategories,
    )

    yield put(getCategories(categories))
  } catch (error) {
    console.log(error)
  }
}

function* observableCategoryById(action: any) {
  const categoryUseCase = makeCategory()
  const categoryId = action.payload as string

  try {
    yield delay(1000)
    const categories: CategoryProps[] = yield call(
      categoryUseCase.getCategoryById,
      categoryId,
    )

    yield put(getCategories(categories))
  } catch (error) {
    console.log(error)
  }
}

// TODO: função Watcher
export function* categoriesSaga(): any {
  yield takeLatest(loadCategories, observableCategories)
  yield takeLatest(loadCategory, observableCategoryById)
}

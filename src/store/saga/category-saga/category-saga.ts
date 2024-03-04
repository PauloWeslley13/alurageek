/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { CategoryUseCase } from './../../../../domain/category/category-use-cases'
import { CategoryProps } from '@/components/types'
import { getCategories } from '@/store/reducers'
import { loadCategories, loadCategory } from '@/store/actions/actions'

const categoryUseCase = new CategoryUseCase()

// TODO: função Worker, função que observar uma action
function* observableCategories() {
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
  const categoryId = action.payload as string
  try {
    yield delay(1000)
    const categories: CategoryProps[] = yield call(
      categoryUseCase.getCategoryById,
      categoryId,
    )

    console.log(categories)

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

import { call, delay, put, takeLatest } from "redux-saga/effects";
import { Task } from "redux-saga";
import {
  getCategories,
  isPendingCategory,
  loadCategories,
  onErrorCategory,
} from "@/main/store/ducks/category";
import { CategoryModel } from "@/domain/models";
import { toasts } from "@/presenter/components/ui";
import { makeCategoryList } from "@/main/store/ducks/category/services/make-categories-list";

function* getCategoryListSaga() {
  yield delay(1000);
  yield put(isPendingCategory(true));

  try {
    const categories: CategoryModel[] = yield call(makeCategoryList);
    yield put(getCategories({ categories, isLoading: false, error: null }));
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorCategory({ isLoading: false, error: error.message }));
      return toasts.error({ title: error.message });
    }
  } finally {
    yield put(isPendingCategory(false));
  }
}

export function* categoryListSaga() {
  const task: Task = yield takeLatest(loadCategories, getCategoryListSaga);
  yield takeLatest(getCategories, () => task.cancel());
}

import { call, delay, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  isPendingCategory,
  loadUpdateCategory,
  onErrorCategory,
  updateCategory,
} from "@/main/store/ducks/category";
import { makeRemoteCategoryUpdated } from "@/main/factories/usecases";
import { CategoryModel } from "@/domain/models";
import { toasts } from "@/presenter/components/ui";
import { ICategoryUpdate } from "@/domain/contracts";

async function makeUpdatedCategory(
  params: ICategoryUpdate.Params,
): Promise<CategoryModel> {
  const resp = makeRemoteCategoryUpdated();
  const data = await resp.updatedCategory(params);
  return data;
}

function* updatedCategory({ payload }: PayloadAction<ICategoryUpdate.Params>) {
  yield delay(1000);
  yield put(isPendingCategory(true));

  try {
    const category: CategoryModel = yield call(makeUpdatedCategory, payload);
    yield put(updateCategory({ category, isLoading: false, error: null }));
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorCategory({ isLoading: false, error: error.message }));
      return toasts.error({ title: error.message });
    }
  } finally {
    yield put(isPendingCategory(false));
  }
}

export function* updatedCategorySaga() {
  yield takeLatest(loadUpdateCategory, updatedCategory);
}

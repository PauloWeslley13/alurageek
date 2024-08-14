import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  createCategory,
  isPendingCategory,
  loadCreateCategory,
  onErrorCategory,
} from "@/main/store/ducks/category";
import { makeRemoteCategoryCreate } from "@/main/factories/usecases";
import { CategoryModel } from "@/domain/models";
import { toasts } from "@/presenter/components/ui";
import { RootState } from "@/main/store/types/types";
import { ICategoryCreate } from "@/domain/contracts";

async function makeAddCategory(
  params: ICategoryCreate.Params,
): Promise<CategoryModel> {
  const resp = makeRemoteCategoryCreate();
  const data = await resp.createCategory(params);
  return data;
}

function* createdCategory({ payload }: PayloadAction<ICategoryCreate.Params>) {
  yield delay(1000);
  const {
    categories: { categories },
  }: RootState = yield select();
  yield put(isPendingCategory(true));

  try {
    const hasExistsCategory =
      categories.length > 0 &&
      categories.some((prod) => prod.name === payload.body.name);

    if (hasExistsCategory) {
      yield put(
        onErrorCategory({ isLoading: false, error: "Categoria já cadastrada" }),
      );
      return toasts.error({ title: "Categoria já cadastrada" });
    }

    const category: CategoryModel = yield call(makeAddCategory, payload);
    yield put(createCategory({ category, isLoading: false, error: null }));
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorCategory({ isLoading: false, error: error.message }));
      return toasts.error({ title: error.message });
    }
  } finally {
    yield put(isPendingCategory(false));
  }
}

export function* addCategorySaga() {
  yield takeLatest(loadCreateCategory, createdCategory);
}

import { call, delay, put, takeLatest } from "redux-saga/effects";
import { Task } from "redux-saga";
import {
  getProducts,
  isPendingProduct,
  loadProduct,
  onErrorProduct,
} from "@/main/store/ducks/products";
import { makeRemoteProductList } from "@/main/factories/usecases";
import { ProductModel } from "@/domain/models";
import { toasts } from "@/presenter/components/ui";

async function makeProductList(): Promise<ProductModel[]> {
  const product = makeRemoteProductList();
  const response = await product.getProductList();
  return response;
}

function* getProductListSaga() {
  yield delay(1000);
  yield put(isPendingProduct(true));

  try {
    const products: ProductModel[] = yield call(makeProductList);
    yield put(getProducts({ products, isLoading: false, error: null }));
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(onErrorProduct({ isLoading: true, error: error.message }));
      return toasts.error({ title: error.message });
    }
  } finally {
    yield put(isPendingProduct(false));
  }
}

export function* productListSaga() {
  const task: Task = yield takeLatest(loadProduct, getProductListSaga);
  yield takeLatest(getProducts, () => task.cancel());
}

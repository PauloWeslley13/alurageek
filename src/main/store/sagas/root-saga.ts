import { all } from "redux-saga/effects";
import * as Category from "@/main/store/ducks/category";
import * as Product from "@/main/store/ducks/products";
import * as Auth from "@/main/store/ducks/auth";
import * as User from "@/main/store/ducks/user";
import * as Theme from "@/main/store/ducks/theme";
import * as AddAccount from "@/main/store/ducks/add-account";
import * as Upload from "@/main/store/ducks/upload";

export default function* rootSaga() {
  yield all([
    Auth.authSaga(),
    User.userAuthSaga(),
    Theme.themeSaga(),
    AddAccount.addAccountSaga(),
    Category.addCategorySaga(),
    Category.updatedCategorySaga(),
    Category.categoryListSaga(),
    Product.addProductSaga(),
    Product.updatedProductSaga(),
    Product.removeProductSaga(),
    Product.productListSaga(),
    Product.productDetailSaga(),
    Upload.loadUploadFileSaga(),
  ]);
}

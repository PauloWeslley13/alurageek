import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { loadUser } from "@/main/store/ducks/user";
import { authSuccess } from "@/main/store/ducks/auth";
import { makeRemoteUserLogged } from "@/main/factories/usecases";
import { AccountModel } from "@/domain/models";
import { toasts } from "@/presenter/components/ui";
import { IUserLogged } from "@/domain/contracts";

async function loadUserAuth({
  userId,
}: IUserLogged.Params): Promise<AccountModel> {
  const user = makeRemoteUserLogged();
  const response = await user.getUserLogged({ userId });
  return { ...response };
}

function* getUserAuth({ payload }: PayloadAction<IUserLogged.Params>) {
  try {
    const user: AccountModel = yield call(loadUserAuth, payload);
    yield put(authSuccess({ user, error: null }));
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      return toasts.error({ title: error.message });
    }
  }
}

export function* userAuthSaga() {
  yield takeLatest(loadUser, getUserAuth);
}

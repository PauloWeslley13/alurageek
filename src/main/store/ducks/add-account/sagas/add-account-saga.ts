import { call, delay, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { loadAddAccount } from "@/main/store/ducks/add-account";
import { authFailure, authPending, authSuccess } from "@/main/store/ducks/auth";
import { makeRemoteAddAccount } from "@/main/factories/usecases";
import { FirebaseErrors } from "@/database/errors";
import { AccountModel } from "@/domain/models";
import { toasts } from "@/presenter/components/ui";
import { IAddAccount } from "@/domain/contracts";

async function addUser(params: IAddAccount.Params): Promise<IAddAccount.Model> {
  const user = makeRemoteAddAccount();
  const response = await user.register(params);
  return response;
}

function hasValidErroAddAccount(auth: IAddAccount.Model) {
  const credentialError = auth instanceof FirebaseErrors.InvalidCredentialError;
  const requestError = auth instanceof FirebaseErrors.TooManyRequestsError;
  const unexpectedError = auth instanceof FirebaseErrors.UnexpectedError;

  return credentialError || requestError || unexpectedError;
}

function* addAccount({ payload }: PayloadAction<IAddAccount.Params>) {
  yield put(authPending(true));
  try {
    yield delay(1000);
    const auth: IAddAccount.Model = yield call(addUser, payload);
    const hasError = hasValidErroAddAccount(auth);
    const user = auth as AccountModel;

    if (hasError) {
      yield put(authFailure({ error: auth.message, isLoading: true }));
      return toasts.error({ title: auth.message });
    } else {
      yield put(authSuccess({ user, error: null }));
      return toasts.success({ title: "Usuário autenticado" });
    }
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      return toasts.error({ title: error.message });
    }
  } finally {
    yield put(authPending(false));
  }
}

export function* addAccountSaga() {
  yield takeLatest(loadAddAccount, addAccount);
}

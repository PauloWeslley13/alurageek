import { call, delay, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { makeRemoteAuthentication } from "@/main/factories/usecases";
import { FirebaseErrors } from "@/database/errors";
import { AccountModel } from "@/domain/models";
import { toasts } from "@/presenter/components/ui";
import { IAuthentication } from "@/domain/contracts";
import { IFirebaseAuth } from "@/infra/services/firebase";
import {
  authFailure,
  authPending,
  authSuccess,
  loadAuth,
} from "@/main/store/ducks/auth";

async function handlerAuth(
  params: IFirebaseAuth.Params,
): Promise<IAuthentication.Model> {
  const login = makeRemoteAuthentication();
  const response = await login.authentication(params);
  return response;
}

function hasValidErroAuth(auth: IAuthentication.Model) {
  const credentialError = auth instanceof FirebaseErrors.InvalidCredentialError;
  const requestError = auth instanceof FirebaseErrors.TooManyRequestsError;
  const unexpectedError = auth instanceof FirebaseErrors.UnexpectedError;

  return credentialError || requestError || unexpectedError;
}

function* authentication({ payload }: PayloadAction<IFirebaseAuth.Params>) {
  yield put(authPending(true));
  try {
    yield delay(1000);
    const auth: IAuthentication.Model = yield call(handlerAuth, payload);
    const hasError = hasValidErroAuth(auth);
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

export function* authSaga() {
  yield takeLatest(loadAuth, authentication);
}

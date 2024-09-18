import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { toasts } from '@/presenter/components/ui'
import { IAuthentication } from '@/data/usecases'
import { IFirebaseAuth } from '@/infra/services/firebase'
import {
  authFailure,
  authPending,
  authService,
  authSuccess,
  loadAuth,
  logout,
  logOut,
} from '@/main/store/ducks/auth'
import { makeRemoteErrorMessage } from '@/main/factories/error'
import {
  removeCurrentUserAdapter,
  setCurrentUserAdapter,
} from '@/main/adapters'

function* authenticationSaga({ payload }: PayloadAction<IFirebaseAuth.Params>) {
  yield put(authPending(true))

  try {
    yield delay(1000)
    const { data, error }: IAuthentication.Model = yield call(
      authService.signIn,
      payload,
    )
    const hasError = makeRemoteErrorMessage(error?.code)

    if (hasError) {
      yield put(authFailure({ error: hasError.message, isLoading: true }))
      toasts.error({ title: hasError.message })
      return
    }

    yield put(authSuccess({ user: data }))
    setCurrentUserAdapter(data)
    toasts.success({ title: 'Usuário autenticado' })
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      toasts.error({ title: error.message })
      return
    }
  } finally {
    yield put(authPending(false))
  }
}

function* logOutSaga() {
  yield put(authPending(true))

  try {
    yield delay(1000)
    yield call(authService.logOut)

    yield put(logout())
    removeCurrentUserAdapter()
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      toasts.error({ title: error.message })
      return
    }
  } finally {
    yield put(authPending(false))
  }
}

export function* authSaga() {
  yield takeLatest(loadAuth, authenticationSaga)
  yield takeLatest(logOut, logOutSaga)
}

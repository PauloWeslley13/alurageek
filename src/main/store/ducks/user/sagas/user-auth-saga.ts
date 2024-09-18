import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { loadUser, userServices } from '@/main/store/ducks/user'
import { authPending, authSuccess } from '@/main/store/ducks/auth'
import { AccountModel } from '@/data/models'
import { toasts } from '@/presenter/components/ui'
import { IUserLogged } from '@/data/usecases'

function* userAuthenticatedSaga({
  payload,
}: PayloadAction<IUserLogged.Params>) {
  yield put(authPending(true))

  try {
    yield delay(100)
    const user: AccountModel = yield call(
      userServices.userAuthenticated,
      payload,
    )
    yield put(authSuccess({ user }))
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      toasts.error({ title: error.message })
    }
  } finally {
    yield put(authPending(false))
  }
}

export function* userAuthSaga() {
  yield takeLatest(loadUser, userAuthenticatedSaga)
}

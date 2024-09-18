import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { FirebaseError } from 'firebase/app'
import {
  addAccountService,
  loadAddAccount,
} from '@/main/store/ducks/add-account'
import { authFailure, authPending, authSuccess } from '@/main/store/ducks/auth'
import { toasts } from '@/presenter/components/ui'
import { IAddAccount, IUserCreate } from '@/data/usecases'
import { makeRemoteErrorMessage } from '@/main/factories/error'

function* createAccountSaga({ payload }: PayloadAction<IAddAccount.Params>) {
  yield put(authPending(true))

  try {
    yield delay(1000)
    const credential: IAddAccount.Model = yield call(
      addAccountService.addAccount,
      payload,
    )

    const user: IUserCreate.Model = yield call(addAccountService.createUser, {
      credential: credential.data,
      username: payload.username,
      photoUrl: payload.photoUrl,
    })

    const hasErrorAccount = makeRemoteErrorMessage(credential.error?.code)
    const hasErrorUser = makeRemoteErrorMessage(
      user.error instanceof FirebaseError ? user.error.code : undefined,
    )

    if (hasErrorAccount) {
      yield put(
        authFailure({ error: hasErrorAccount.message, isLoading: true }),
      )
      toasts.error({ title: hasErrorAccount.message })
      return
    }

    if (hasErrorUser) {
      yield put(authFailure({ error: hasErrorUser.message, isLoading: true }))
      toasts.error({ title: hasErrorUser.message })
      return
    }

    if (!user.data) {
      yield put(
        authFailure({ error: 'Error ao cadastrar usuário', isLoading: true }),
      )
      toasts.error({ title: 'Error ao cadastrar usuário' })
      return
    }

    yield put(authSuccess({ user: user.data, error: null }))
    toasts.success({ title: 'Usuário autenticado' })
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(authFailure({ error: error.message, isLoading: true }))
      toasts.error({ title: error.message })
    }
  } finally {
    yield put(authPending(false))
  }
}

export function* addAccountSaga() {
  yield takeLatest(loadAddAccount, createAccountSaga)
}

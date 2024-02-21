/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, cancel, put, takeLatest } from 'redux-saga/effects'
import { getUserLogged } from '@/store/reducers'
import { toasts } from '@/components/ui'
import usersService from '@/services/get-users'
import { loadUser } from '@/store/actions/actions'
import { UsersProps } from '@/components/types'

function getUserUid() {
  const userLogged = localStorage.getItem('@userData')

  if (userLogged) {
    const getUserUid = JSON.parse(userLogged)
    return getUserUid
  }
}

type StorageUserProps = {
  uid: string
  username: string
}

function* useAuthentication(action: any) {
  const user = getUserUid() as StorageUserProps
  const userId = action.payload! as string

  try {
    const userIsLogged: UsersProps = yield call(usersService.get, userId)

    const userAuth = {
      id: user.uid,
      username: userIsLogged.username,
      email: userIsLogged.email,
      password: userIsLogged.password,
      photoUrl: userIsLogged.photoUrl,
    } satisfies UsersProps

    yield put(getUserLogged({ user: userAuth, isLogged: true }))
  } catch (error) {
    toasts.error({ title: 'erro' })
  }
}

export function* userLoggedSaga(): any {
  const taskUser = yield takeLatest(loadUser, useAuthentication)
  yield takeLatest(getUserLogged, () => cancel(taskUser))
}

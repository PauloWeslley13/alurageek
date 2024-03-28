/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, cancel, put, takeLatest } from 'redux-saga/effects'
import { getUserLogged } from '@/store/reducers'
import { loadUser } from '@/store/actions/actions'
import { UsersProps } from '@/components/types'
import { UserUseCase } from '../../../../domain/user'

const usersService = new UserUseCase()

function* userLoggedAuth(action: any) {
  const userId = action.payload! as string

  try {
    const userOnAuth: UsersProps = yield call(usersService.userById, userId)

    const user = {
      ...userOnAuth,
      id: userId,
    } satisfies UsersProps

    console.log(user)

    yield put(getUserLogged({ user, isLogged: true }))
  } catch (error) {
    yield put(getUserLogged({ user: {} as UsersProps, isLogged: false }))
    console.log(`Error UserSaga ${error}`)
  }
}

export function* userLoggedSaga(): any {
  const taskUser = yield takeLatest(loadUser, userLoggedAuth)
  yield takeLatest(getUserLogged, () => cancel(taskUser))
}

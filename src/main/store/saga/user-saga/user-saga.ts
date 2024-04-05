/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, cancel, put, takeLatest } from 'redux-saga/effects'
import { getUserLogged } from '@/main/store/reducers'
import { loadUser } from '@/main/store/actions/actions'
import { UsersProps } from '@/presenter/components/types'
import { UserUseCase } from '@/domain/user'

const makeUser = (): UserUseCase => new UserUseCase()

function* userLoggedAuth(action: any) {
  const userId = action.payload! as string
  const usersService = makeUser()

  try {
    const userOnAuth: UsersProps = yield call(usersService.userById, userId)

    const user = {
      ...userOnAuth,
      id: userId,
    } satisfies UsersProps

    yield put(getUserLogged({ user, isLogged: true }))
  } catch (error) {
    yield put(getUserLogged({ user: {} as UsersProps, isLogged: false }))
    console.error(`Error UserSaga ${error}`)
  }
}

export function* userLoggedSaga(): any {
  const taskUser = yield takeLatest(loadUser, userLoggedAuth)
  yield takeLatest(getUserLogged, () => cancel(taskUser))
}

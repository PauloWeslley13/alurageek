import { createListenerMiddleware } from '@reduxjs/toolkit'
import { loadUser } from '@/store/actions'
import usersService from '@/services/get-users'
import { getUserLogged } from '@/store/reducers'
import { RootState } from '@/store/types'
import { auth } from '@/config/firebase'

const listenerUser = createListenerMiddleware()

listenerUser.startListening({
  actionCreator: loadUser,
  effect: async (_, { dispatch, fork, getState, unsubscribe }) => {
    const state = getState() as RootState
    const user = state.user

    if (user.isLogged) return unsubscribe()

    const task = fork(async () => {
      const userLogged = localStorage.getItem('@userData')

      if (userLogged) {
        const getUserUid: string = JSON.parse(userLogged)
        return await usersService.get(getUserUid)
      }
    })

    const response = await task.result

    if (response.status === 'ok') {
      const userCurrent = auth.currentUser

      if (response.value && userCurrent) {
        const userAuth = {
          id: userCurrent.uid,
          username: response.value.username,
          email: response.value.email,
          password: response.value.password,
        }

        dispatch(getUserLogged({ user: userAuth, isLogged: true }))
      }
    }
  },
})

export { listenerUser }

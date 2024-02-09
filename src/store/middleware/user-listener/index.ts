import { createListenerMiddleware } from '@reduxjs/toolkit'
import { loadUser } from '@/store/actions'
import usersService from '@/services/get-users'
import { getUserLogged } from '@/store/reducers'
import { RootState } from '@/store/types'

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
      if (response.value) {
        dispatch(getUserLogged({ user: response.value, isLogged: true }))
      }
    }
  },
})

export { listenerUser }

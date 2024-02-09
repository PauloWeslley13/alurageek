import { createListenerMiddleware } from '@reduxjs/toolkit'
import { loadCart } from '@/store/actions'
import { getCart } from '@/store/reducers'
import cartService from '@/services/get-cart'
import { RootState } from '@/store/types'

const listenerCart = createListenerMiddleware()

listenerCart.startListening({
  actionCreator: loadCart,
  effect: async (_, { dispatch, fork, getState }) => {
    const state = getState() as RootState
    const { user } = state.user

    const task = fork(async () => {
      return await cartService.get(user.id)
    })

    const response = await task.result

    if (response.status === 'ok') {
      console.log('info do carinho ==> ', response.value)
      dispatch(getCart(response.value))
    }
  },
})

export { listenerCart }

import { createListenerMiddleware } from '@reduxjs/toolkit'
import { loadCart } from '@/store/actions'
import { getCart } from '@/store/reducers'
import cartService from '@/services/get-cart'

const listenerCart = createListenerMiddleware()

listenerCart.startListening({
  actionCreator: loadCart,
  effect: async (_, { dispatch, fork }) => {
    const task = fork(async () => {
      return await cartService.get()
    })

    const response = await task.result

    if (response.status === 'ok') {
      dispatch(getCart(response.value))
    }
  },
})

export { listenerCart }

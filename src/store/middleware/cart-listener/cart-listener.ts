import { createListenerMiddleware } from '@reduxjs/toolkit'
import { loadCart } from '@/store/actions/actions'
import { getCart } from '@/store/reducers'
import { RootState } from '@/store/types/types'
import cartService from '@/services/get-cart'
import { CartType } from '@/components/types'

const listenerCart = createListenerMiddleware()

listenerCart.startListening({
  actionCreator: loadCart,
  effect: async (_, { dispatch, fork, getState }) => {
    const state = getState() as RootState
    const { user, isLogged } = state.user

    const task = fork(async () => {
      return await cartService.get(user.id)
    })

    const response = await task.result

    if (response.status === 'ok') {
      if (response.value && isLogged) {
        const userCart: CartType = {
          id: response.value.id,
          data: response.value.data,
          userId: response.value.userId,
          totalPrice: response.value.totalPrice,
        }

        dispatch(getCart(userCart))
      }
    }
  },
})

export { listenerCart }

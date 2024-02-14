import { createListenerMiddleware } from '@reduxjs/toolkit'
import { loadCart } from '@/store/actions/actions'
import { getCart } from '@/store/reducers'
import cartService from '@/services/get-cart'
import { CartType } from '@/components/types'

const listenerCart = createListenerMiddleware()

listenerCart.startListening({
  actionCreator: loadCart,
  effect: async (_, { dispatch, fork }) => {
    const task = fork(async () => {
      const userLogged = localStorage.getItem('@userData')

      if (userLogged) {
        const getUserUid = JSON.parse(userLogged)

        return await cartService.get(getUserUid.uid)
      }
    })

    const response = await task.result

    if (response.status === 'ok') {
      if (response.value) {
        const userCart: CartType = {
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

import { createListenerMiddleware } from '@reduxjs/toolkit'
import { loadProduct } from '@/store/actions/actions'
import { getProducts } from '@/store/reducers'
import productsService from '@/services/get-products'

const listenerProduct = createListenerMiddleware()

listenerProduct.startListening({
  actionCreator: loadProduct,
  effect: async (_, { dispatch, fork }) => {
    const task = fork(async (api) => {
      await api.delay(1000)

      return await productsService.get()
    })

    const response = await task.result

    if (response.status === 'ok') {
      dispatch(getProducts(response.value))
    }
  },
})

export { listenerProduct }

import { createListenerMiddleware } from '@reduxjs/toolkit'
import { loadProduct } from '@/store/actions/actions'
import { getProducts } from '@/store/reducers'
import productsService from '@/services/get-products'

const listenerProduct = createListenerMiddleware()

listenerProduct.startListening({
  actionCreator: loadProduct,
  effect: async (_, { dispatch, fork }) => {
    const task = fork(async () => {
      return await productsService.get()
    })

    const response = await task.result

    if (response.status === 'ok') {
      dispatch(getProducts({ products: response.value, isLoading: false }))
    }
  },
})

export { listenerProduct }

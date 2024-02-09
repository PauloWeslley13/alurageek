import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'
import { listenerUser } from './middleware/user-listener'
import { listenerProduct } from './middleware/product-listener'
import { listenerCart } from './middleware/cart-listener'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      listenerUser.middleware,
      listenerProduct.middleware,
      listenerCart.middleware,
    ),
})

export { store }

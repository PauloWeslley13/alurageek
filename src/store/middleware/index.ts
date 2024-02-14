import { listenerUser } from './user-listener/user-listener'
import { listenerCart } from './cart-listener/cart-listener'
import { listenerProduct } from './product-listener/product-listener'

export const middleware = [
  listenerUser.middleware,
  listenerCart.middleware,
  listenerProduct.middleware,
]

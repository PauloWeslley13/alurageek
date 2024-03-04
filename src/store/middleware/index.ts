// import { listenerCart } from './cart-listener/cart-listener'
import { sagaMiddleware } from './saga-middleware/saga-middleware'

export const middleware = [sagaMiddleware]

export { sagaMiddleware }

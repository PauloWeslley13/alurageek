import {
  cartReducer,
  productsReducer,
  searchReducer,
  themesReducer,
  userReducer,
} from './index'

const rootReducer = {
  theme: themesReducer,
  products: productsReducer,
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
}

export { rootReducer }

import {
  cartReducer,
  productsReducer,
  searchReducer,
  themesReducer,
  userReducer,
  productDetailReducer,
} from './index'

const rootReducer = {
  theme: themesReducer,
  products: productsReducer,
  productDetail: productDetailReducer,
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
}

export { rootReducer }

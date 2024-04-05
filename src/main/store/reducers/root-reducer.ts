import {
  cartReducer,
  productsReducer,
  searchReducer,
  themesReducer,
  userReducer,
  productDetailReducer,
  categoriesReducer,
} from './index'

const rootReducer = {
  theme: themesReducer,
  products: productsReducer,
  productDetail: productDetailReducer,
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  categories: categoriesReducer,
}

export { rootReducer }

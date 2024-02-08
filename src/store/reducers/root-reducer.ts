import {
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
}

export { rootReducer }

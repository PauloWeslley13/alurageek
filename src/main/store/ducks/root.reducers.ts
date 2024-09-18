import * as Cart from '@/main/store/ducks/cart'
import * as Product from '@/main/store/ducks/products'
import * as Category from '@/main/store/ducks/category'
import * as Auth from '@/main/store/ducks/auth'
import * as Theme from '@/main/store/ducks/theme'
import * as Search from '@/main/store/ducks/search'
import * as Upload from '@/main/store/ducks/upload'
import * as Snackbar from '@/main/store/ducks/snackbar'

const rootReducer = {
  theme: Theme.themeReducer,
  authentication: Auth.authenticationReducer,
  products: Product.productsReducer,
  productDetail: Product.productDetailReducer,
  search: Search.searchReducer,
  cart: Cart.cartReducer,
  categories: Category.categoriesReducer,
  upload: Upload.themeReducer,
  snackbar: Snackbar.snackbarReducer,
}

export default rootReducer

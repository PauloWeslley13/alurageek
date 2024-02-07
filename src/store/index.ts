import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './reducers/themes'
import productsReducer from './reducers/products'
import usersReducer from './reducers/user'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
    user: usersReducer,
  },
})

export default store

export type StateProps = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

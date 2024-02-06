import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './reducers/themes'
import productsReducer from './reducers/products'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
  },
})

export default store

export type StateProps = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

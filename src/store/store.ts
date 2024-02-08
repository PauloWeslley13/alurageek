import { configureStore } from '@reduxjs/toolkit'
import { productsReducer, themesReducer, userReducer } from './reducers'

const store = configureStore({
  reducer: {
    theme: themesReducer,
    products: productsReducer,
    user: userReducer,
  },
})

export { store }

type GetStateType = typeof store.getState

export type RootState = ReturnType<GetStateType>
export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'
import { middleware, sagaMiddleware } from './middleware'
import { rootSaga } from './saga/root-saga'

// TODO: estuda o redux-saga
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(middleware),
})

sagaMiddleware.run(rootSaga)

export { store }

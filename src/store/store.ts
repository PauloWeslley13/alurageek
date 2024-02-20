import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducers'
import { middleware } from './middleware'
import { rootSaga } from './saga/root-saga'

const sagaMiddleware = createSagaMiddleware()

// TODO: estuda o redux-saga

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(middleware).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export { store, sagaMiddleware }

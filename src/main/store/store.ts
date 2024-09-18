import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './ducks/root.reducers'
import rootSaga from './sagas/root-saga'
import { listenerUpload } from './ducks/upload'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
      .prepend(listenerUpload.middleware)
      .concat(sagaMiddleware)
  },
})

sagaMiddleware.run(rootSaga)

export { store }

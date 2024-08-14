import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./ducks/root-reducer";
import rootSaga from "./sagas/root-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).prepend([sagaMiddleware]);
  },
});

sagaMiddleware.run(rootSaga);

export { store };

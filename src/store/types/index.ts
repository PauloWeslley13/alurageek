import { store } from '..'

type GetStateType = typeof store.getState

export type RootState = ReturnType<GetStateType>
export type AppDispatch = typeof store.dispatch

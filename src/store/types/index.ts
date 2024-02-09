import { store } from '../index'

type GetStateType = typeof store.getState

export type RootState = ReturnType<GetStateType>
export type AppDispatch = typeof store.dispatch

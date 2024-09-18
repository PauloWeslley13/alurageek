import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit'
import { IAuthentication } from '@/data/usecases'

export const logOut = createAction('auth/logOut')

export const loadAuth: ActionCreatorWithPayload<
  IAuthentication.Params,
  string
> = createAction<IAuthentication.Params>('auth/loadAuth')

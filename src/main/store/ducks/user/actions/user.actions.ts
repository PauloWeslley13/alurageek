import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit'
import { IUserLogged } from '@/data/usecases'

export const loadUser: ActionCreatorWithPayload<IUserLogged.Params, string> =
  createAction<IUserLogged.Params>('user/loadUser')

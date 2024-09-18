import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit'
import { IAddAccount } from '@/data/usecases'

export const loadAddAccount: ActionCreatorWithPayload<
  IAddAccount.Params,
  string
> = createAction<IAddAccount.Params>('addAccount/loadAddAccount')

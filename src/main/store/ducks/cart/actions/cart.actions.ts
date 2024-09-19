import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit'
import { CartType } from '@/presenter/components/types'

export const loadCart: ActionCreatorWithPayload<CartType, string> =
  createAction<CartType>('cart/loadCart')

export const loadSavedCart = createAction<CartType>('cart/loadSavedCart')

export const loadUserCartSaved = createAction('cart/loadUserCartSave')

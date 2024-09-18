import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit'
import { ICategoryCreate, ICategoryUpdate } from '@/data/usecases'

export const loadCategories = createAction('category/loadCategories')

export const loadCreateCategory: ActionCreatorWithPayload<
  ICategoryCreate.Params,
  string
> = createAction<ICategoryCreate.Params>('category/createCategory')

export const loadUpdateCategory: ActionCreatorWithPayload<
  ICategoryUpdate.Params,
  string
> = createAction<ICategoryUpdate.Params>('category/updateCategory')

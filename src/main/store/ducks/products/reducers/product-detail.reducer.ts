import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductModel } from '@/data/models'
import { Product } from '../types'

const INITIAL_STATE_PRODUCT_DETAIL = {
  product: {} as ProductModel,
  isLoading: false,
  error: null,
} satisfies Product.DetailStateProps as Product.DetailStateProps

const productDetailSlice = createSlice({
  name: 'product-detail',
  initialState: INITIAL_STATE_PRODUCT_DETAIL,
  reducers: {
    productDetailSuccess: (state, { payload }: PayloadAction<ProductModel>) => {
      state.product = payload
    },
    productDetailIsPending: (state, { payload }: PayloadAction<boolean>) => {
      return { ...state, isLoading: payload }
    },
    productDetailIsError: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        isLoading: true,
        error: payload,
      }
    },
  },
})

export const {
  productDetailSuccess,
  productDetailIsPending,
  productDetailIsError,
} = productDetailSlice.actions
export const productDetailReducer = productDetailSlice.reducer

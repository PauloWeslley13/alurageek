import { ProductsProps } from '@/components/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {} as ProductsProps

const productDetailSlice = createSlice({
  name: 'product-detail',
  initialState: INITIAL_STATE,
  reducers: {
    getProductDetail: (_, { payload }: PayloadAction<ProductsProps>) => {
      return payload
    },
  },
})

export const { getProductDetail } = productDetailSlice.actions
export const productDetailReducer = productDetailSlice.reducer

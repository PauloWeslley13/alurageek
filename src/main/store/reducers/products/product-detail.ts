import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProductsProps } from '@/presenter/components/types'

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

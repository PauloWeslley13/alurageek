import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductsProps, ProductsType } from '@/presenter/components/types'

const INITIAL_STATE = {
  products: [] as ProductsProps[],
  isLoading: true as boolean,
}

const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    createProduct: (state, { payload }: PayloadAction<ProductsProps>) => {
      return {
        products: [...state.products, { ...payload }],
        isLoading: false,
      }
    },
    updateProduct: (state, { payload }: PayloadAction<ProductsProps>) => {
      const index = state.products.findIndex((item) => item.id === payload.id)
      state.products[index] = payload
    },
    deleteProduct: (state, { payload }: PayloadAction<ProductsProps>) => {
      return {
        products: state.products.filter((item) => item.id !== payload.id),
        isLoading: false,
      }
    },
    getProductsByCategory: (_, { payload }: PayloadAction<ProductsType>) => {
      console.log(payload)

      return payload
    },
    getProducts: (_, { payload }: PayloadAction<ProductsType>) => {
      return payload
    },
  },
})

export const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductsByCategory,
} = productsSlice.actions
export const productsReducer = productsSlice.reducer

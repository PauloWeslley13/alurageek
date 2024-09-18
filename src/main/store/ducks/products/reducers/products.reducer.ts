import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/main/store/ducks/products'
import { ProductModel } from '@/data/models'

const INITIAL_STATE_PRODUCT = {
  products: [],
  error: null,
  isLoading: false,
} satisfies Product.StateProps as Product.StateProps

const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE_PRODUCT,
  reducers: {
    createProduct: (state, { payload }: PayloadAction<Product.Params>) => {
      return {
        products: [...state.products, { ...payload.product }],
        error: null,
        isLoading: false,
      }
    },
    updateProduct: (state, { payload }: PayloadAction<Product.Params>) => {
      const prodIndex = state.products.findIndex(
        (item) => item.id === payload.product.id,
      )

      state.products[prodIndex] = payload.product
      state.error = null
      state.isLoading = false
    },
    deleteProduct: (
      state,
      { payload }: PayloadAction<Product.DeleteParams>,
    ) => {
      state.products = state.products.filter(
        (item) => item.id !== payload.productId,
      )
    },
    isPendingProduct: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    onErrorProduct: (_, { payload }: PayloadAction<Product.ErrorParams>) => {
      return {
        products: [],
        isLoading: payload.isLoading,
        error: payload.error,
      }
    },
    getProducts: (state, { payload }: PayloadAction<ProductModel[]>) => {
      state.products = payload
    },
  },
})

export const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  isPendingProduct,
  onErrorProduct,
} = productsSlice.actions
export const productsReducer = productsSlice.reducer

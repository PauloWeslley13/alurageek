import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/main/store/ducks/products";

const INITIAL_STATE_PRODUCT = {
  products: [],
  error: null,
  isLoading: false,
} satisfies Product.StateProps as Product.StateProps;

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE_PRODUCT,
  reducers: {
    createProduct: (state, { payload }: PayloadAction<Product.Params>) => {
      return {
        products: payload.product
          ? [...state.products, { ...payload.product }]
          : [...state.products],
        error: payload.error,
        isLoading: payload.isLoading,
      };
    },
    updateProduct: (state, { payload }: PayloadAction<Product.Params>) => {
      const prodIndex = state.products.findIndex(
        (item) => item.id === payload.product?.id,
      );

      state.products[prodIndex] = payload.product
        ? payload.product
        : state.products[prodIndex];
      state.error = payload.error;
      state.isLoading = payload.isLoading;
    },
    deleteProduct: (
      state,
      { payload }: PayloadAction<Product.DeleteParams>,
    ) => {
      return {
        products: state.products.filter(
          (item) => item.id !== payload.body.productId,
        ),
        error: payload.error,
        isLoading: payload.isLoading,
      };
    },
    isPendingProduct: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: payload,
      };
    },
    onErrorProduct: (_, { payload }: PayloadAction<Product.ErrorParams>) => {
      return {
        products: [],
        isLoading: payload.isLoading,
        error: payload.error,
      };
    },
    getProducts: (_, { payload }: PayloadAction<Product.StateProps>) => {
      return payload;
    },
  },
});

export const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  isPendingProduct,
  onErrorProduct,
} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "@/main/store/ducks/category";

const INITIAL_STATE_CATEGORY = {
  categories: [],
  error: null,
  isLoading: false,
} satisfies Category.StateProps as Category.StateProps;

const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE_CATEGORY,
  reducers: {
    createCategory: (state, { payload }: PayloadAction<Category.Params>) => {
      return {
        categories: payload.category
          ? [...state.categories, { ...payload.category }]
          : [...state.categories],
        error: payload.error,
        isLoading: payload.isLoading,
      };
    },
    updateCategory: (state, { payload }: PayloadAction<Category.Params>) => {
      const prodIndex = state.categories.findIndex(
        (item) => item.id === payload.category?.id,
      );

      state.categories[prodIndex] = payload.category
        ? payload.category
        : state.categories[prodIndex];
      state.error = payload.error;
      state.isLoading = payload.isLoading;
    },
    isPendingCategory: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: payload,
      };
    },
    onErrorCategory: (
      state,
      { payload }: PayloadAction<Category.ErrorParams>,
    ) => {
      return {
        categories: state.categories,
        isLoading: payload.isLoading,
        error: payload.error,
      };
    },
    getCategories: (_, { payload }: PayloadAction<Category.StateProps>) => {
      return payload;
    },
  },
});

export const {
  createCategory,
  updateCategory,
  getCategories,
  onErrorCategory,
  isPendingCategory,
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;

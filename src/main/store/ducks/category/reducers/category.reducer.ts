import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from '@/main/store/ducks/category'
import { CategoryModel } from '@/data/models'

const INITIAL_STATE_CATEGORY = {
  categories: [],
  error: null,
  isLoading: false,
} satisfies Category.StateProps as Category.StateProps

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE_CATEGORY,
  reducers: {
    createCategory: (state, { payload }: PayloadAction<Category.Params>) => {
      state.categories = [...state.categories, { ...payload.category }]
    },
    updateCategory: (state, { payload }: PayloadAction<Category.Params>) => {
      const prodIndex = state.categories.findIndex(
        (item) => item.id === payload.category?.id,
      )

      state.categories[prodIndex] = payload.category
    },
    isPendingCategory: (state, { payload }: PayloadAction<boolean>) => {
      return { ...state, isLoading: payload }
    },
    onErrorCategory: (
      state,
      { payload }: PayloadAction<Category.ErrorParams>,
    ) => {
      return {
        ...state,
        isLoading: payload.isLoading,
        error: payload.error,
      }
    },
    getCategories: (state, { payload }: PayloadAction<CategoryModel[]>) => {
      return { ...state, categories: payload }
    },
  },
})

export const {
  createCategory,
  updateCategory,
  getCategories,
  onErrorCategory,
  isPendingCategory,
} = categoriesSlice.actions

export const categoriesReducer = categoriesSlice.reducer

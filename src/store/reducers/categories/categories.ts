import { CategoryProps } from '@/components/types/category-props'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type InitialStateProps = {
  categories: CategoryProps[]
}

const INITIAL_STATE: InitialStateProps = {
  categories: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    setCreateCategory: (state, { payload }: PayloadAction<CategoryProps>) => {
      return {
        categories: [...state.categories, { ...payload }],
      }
    },
    setUpdateCategory: (state, { payload }: PayloadAction<CategoryProps>) => {
      const index = state.categories.findIndex((item) => item.id === payload.id)
      state.categories[index] = payload
    },
    getCategories: (_, { payload }: PayloadAction<CategoryProps[]>) => {
      return { categories: payload }
    },
  },
})

export const { setCreateCategory, setUpdateCategory, getCategories } =
  categoriesSlice.actions

export const categoriesReducer = categoriesSlice.reducer

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: string = ''

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searching: (_, { payload }: PayloadAction<string>) => payload,
    resetSearch: () => initialState,
  },
})

export const { searching, resetSearch } = searchSlice.actions
export const searchReducer = searchSlice.reducer

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE: string = ''

const searchSlice = createSlice({
  name: 'search',
  initialState: INITIAL_STATE,
  reducers: {
    searching: (_, { payload }: PayloadAction<string>) => payload,
    resetSearch: () => INITIAL_STATE,
  },
})

export const { searching, resetSearch } = searchSlice.actions
export const searchReducer = searchSlice.reducer

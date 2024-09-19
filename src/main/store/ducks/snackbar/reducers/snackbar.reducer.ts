import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/main/store/types/types'

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: false,
  reducers: {
    openSnackbar: (_, { payload }: PayloadAction<boolean>) => {
      return payload
    },
  },
})

export const useSelectorSnackBar = (state: RootState) => state.snackbar
export const { openSnackbar } = snackbarSlice.actions
export const snackbarReducer = snackbarSlice.reducer

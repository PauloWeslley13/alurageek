import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ThemeType = { theme: string }

const initialState: ThemeType = { theme: 'light' }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<string>) => {
      state.theme = payload
      localStorage.setItem('@appTheme', JSON.stringify(payload))
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

type ThemeType = { theme: 'light' | 'dark' }

const initialState: ThemeType = { theme: 'light' }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeLight: (state) => {
      state.theme = 'light'
    },
    themeDark: (state) => {
      state.theme = 'dark'
    },
  },
})

export const { themeDark, themeLight } = themeSlice.actions
export default themeSlice.reducer

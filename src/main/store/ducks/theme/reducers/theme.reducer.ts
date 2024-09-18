import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PaletteMode } from '@mui/material'
import { setCurrentThemeAdapter } from '@/main/adapters'

type ThemeType = { theme: PaletteMode }

const INITIAL_THEME = {
  theme: 'light',
} satisfies ThemeType as ThemeType

const themeSlice = createSlice({
  name: 'theme',
  initialState: INITIAL_THEME,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<PaletteMode>) => {
      state.theme = payload
      setCurrentThemeAdapter(state)
    },
    getTheme: (_, { payload }: PayloadAction<PaletteMode>) => {
      return {
        theme: payload,
      }
    },
  },
})

export const { setTheme, getTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer

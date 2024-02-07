import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ThemeType = { theme: string }

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('@appTheme')
  return storedTheme || 'light'
}

const initialState: ThemeType = { theme: getInitialTheme() }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<string>) => {
      state.theme = payload
      localStorage.setItem('@appTheme', payload)
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer

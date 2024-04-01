import { ReactNode, useMemo } from 'react'
import {
  CssBaseline,
  GlobalStyles,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material'
import { Typography } from './typography'
import { Palette } from './palette'
import { FONTS, spacing } from '@/styles'
import { GlobalStyle } from './global-styles'
import { useAppSelector } from '@/store/hook/useRedux'

export const ThemeCustomization = ({ children }: { children: ReactNode }) => {
  const { theme } = useAppSelector((state) => state.theme)
  const INITIAL_THEME = theme === 'dark' ? 'dark' : 'light'
  const themePalette = Palette({ theme: INITIAL_THEME })
  const themeTypography = Typography({
    fontFamily: FONTS.fontFamily.RALEWAY,
  })

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      spacing,
      typography: themeTypography,
      palette: themePalette,
    }),
    [themeTypography, themePalette],
  )

  let themes = createTheme(themeOptions)
  themes = responsiveFontSizes(themes)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <GlobalStyles styles={GlobalStyle} />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

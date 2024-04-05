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
import { ComponentOverrides } from './overrides'
import { Typography } from './typography'
import { Palette } from './palette'
import { GlobalStyle } from './global-styles'
import { FONTS, spacing } from '@/presenter/styles'
import { useAppSelector } from '@/main/store/hook/useRedux'

export const ThemeCustomization = ({ children }: { children: ReactNode }) => {
  const { theme } = useAppSelector((state) => state.theme)
  const themePalette = Palette({ theme: theme === 'dark' ? 'dark' : 'light' })
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
  themes.components = ComponentOverrides(themes)
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

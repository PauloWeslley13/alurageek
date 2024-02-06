import { ReactNode, useMemo } from 'react'
import {
  CssBaseline,
  GlobalStyles,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import { Typography } from './typography'
import { Palette } from './palette'
import { GlobalStyle, STYLES } from '@/styles'

type ThemeCustomizationProps = { children: ReactNode }

export const ThemeCustomization = ({ children }: ThemeCustomizationProps) => {
  const themeTypography = Typography({
    fontFamily: STYLES.FONTS.fontFamily.RALEWAY,
  })
  const themePalette = Palette({ theme: 'light' })

  const themeOptions = useMemo(
    () => ({
      spacing: (factor: number) => `${0.25 * factor}rem`,
      typography: themeTypography,
      palette: themePalette,
    }),
    [themeTypography, themePalette],
  )

  const themes = createTheme(themeOptions)

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

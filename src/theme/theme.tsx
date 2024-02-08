import { ReactNode, useMemo } from 'react'
import {
  CssBaseline,
  GlobalStyles,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import { Typography } from './typography'
import { Palette } from './palette'
import { STYLES } from '@/styles'
import { GlobalStyle } from './global-styles'
import { useAppSelector } from '@/store/hook/useRedux'

type ThemeCustomizationProps = { children: ReactNode }

export const ThemeCustomization = ({ children }: ThemeCustomizationProps) => {
  const theme = useAppSelector((state) => state.theme.theme)
  const themeInitial = theme === 'dark' ? 'dark' : 'light'
  const themePalette = Palette({ theme: themeInitial })
  const themeTypography = Typography({
    fontFamily: STYLES.FONTS.fontFamily.RALEWAY,
  })

  const themeOptions: ThemeOptions = useMemo(
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

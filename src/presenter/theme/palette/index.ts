import { PaletteOptions } from '@mui/material'
import { COLORS, LIGHT, DARK } from '@/presenter/styles'

type PaletteProps = { theme: 'light' | 'dark' }

export const Palette = ({ theme }: PaletteProps): PaletteOptions => ({
  mode: theme,
  common: {
    black: COLORS.black,
    white: COLORS.white,
  },
  primary: {
    main: theme === 'light' ? LIGHT.primary.main : DARK.primary.main,
    light: theme === 'light' ? LIGHT.primary.light : DARK.primary.light,
    dark: theme === 'light' ? LIGHT.primary.dark : DARK.primary.dark,
    contrastText:
      theme === 'light'
        ? LIGHT.primary.contrastText
        : DARK.primary.contrastText,
  },
  secondary: {
    main: theme === 'light' ? LIGHT.secondary.main : DARK.secondary.main,
    light: theme === 'light' ? LIGHT.secondary.light : DARK.secondary.light,
    dark: theme === 'light' ? LIGHT.secondary.dark : DARK.secondary.dark,
    contrastText:
      theme === 'light'
        ? LIGHT.secondary.contrastText
        : DARK.secondary.contrastText,
  },
  background: {
    paper: theme === 'light' ? LIGHT.background.paper : DARK.background.paper,
    default:
      theme === 'light' ? LIGHT.background.default : DARK.background.default,
  },
  grey: {
    50: COLORS.zinc[50],
    100: COLORS.zinc[100],
    200: COLORS.zinc[200],
    300: COLORS.zinc[300],
    400: COLORS.zinc[400],
    500: COLORS.zinc[500],
    600: COLORS.zinc[600],
    700: COLORS.zinc[700],
    800: COLORS.zinc[800],
    900: COLORS.zinc[900],
    A100: COLORS.woodsmoke[100],
    A200: COLORS.woodsmoke[200],
    A400: COLORS.woodsmoke[400],
    A700: COLORS.zinc[950],
  },
})

import { PaletteOptions } from '@mui/material'
import { deepPurple, indigo, purple } from '@mui/material/colors'
import { COLORS } from '@/styles'

type PaletteProps = { theme: 'light' | 'dark' }

export const Palette = ({ theme }: PaletteProps): PaletteOptions => ({
  mode: theme,
  common: {
    black: COLORS.black,
    white: COLORS.white,
  },
  primary: {
    main: theme === 'light' ? indigo[500] : COLORS.violet[500],
    light: theme === 'light' ? indigo[300] : COLORS.violet[300],
    dark: theme === 'light' ? indigo[800] : COLORS.violet[800],
    contrastText: theme === 'light' ? indigo.A100 : COLORS.violet[100],
  },
  secondary: {
    main: theme === 'light' ? deepPurple[500] : purple[500],
    light: theme === 'light' ? deepPurple[300] : purple[300],
    dark: theme === 'light' ? deepPurple[800] : purple[800],
    contrastText: theme === 'light' ? deepPurple.A100 : purple.A100,
  },
  background: {
    paper: theme === 'light' ? COLORS.bunker[300] : COLORS.zinc[300],
    default: theme === 'light' ? indigo[50] : COLORS.zinc[200],
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

import { PaletteOptions, alpha, darken, lighten } from '@mui/material'
import { blueGrey, purple } from '@mui/material/colors'
import { COLORS, LIGHT, DARK } from '@/presenter/styles'

declare module '@mui/material/styles' {
  interface PaletteColor {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    950: string
    A100: string
    A200: string
    A400: string
    A700: string
  }

  interface SimplePaletteColorOptions {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    950: string
    A100: string
    A200: string
    A400: string
    A700: string
  }
}

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

    50: theme === 'light' ? COLORS.violet[50] : purple[50],
    100: theme === 'light' ? COLORS.violet[100] : purple[100],
    200: theme === 'light' ? COLORS.violet[200] : purple[200],
    300: theme === 'light' ? COLORS.violet[300] : purple[300],
    400: theme === 'light' ? COLORS.violet[400] : purple[400],
    500: theme === 'light' ? COLORS.violet[500] : purple[500],
    600: theme === 'light' ? COLORS.violet[600] : purple[600],
    700: theme === 'light' ? COLORS.violet[700] : purple[700],
    800: theme === 'light' ? COLORS.violet[800] : purple[800],
    900: theme === 'light' ? COLORS.violet[900] : purple[900],
    950: theme === 'light' ? COLORS.violet[950] : darken(purple[900], 0.5),
    A100: theme === 'light' ? lighten(COLORS.violet[100], 0.1) : purple.A100,
    A200: theme === 'light' ? lighten(COLORS.violet[200], 0.2) : purple.A200,
    A400: theme === 'light' ? alpha(COLORS.violet[400], 0.4) : purple.A400,
    A700: theme === 'light' ? darken(COLORS.violet[700], 0.7) : purple.A700,
  },
  secondary: {
    main: theme === 'light' ? LIGHT.secondary.main : DARK.secondary.main,
    light: theme === 'light' ? LIGHT.secondary.light : DARK.secondary.light,
    dark: theme === 'light' ? LIGHT.secondary.dark : DARK.secondary.dark,
    contrastText:
      theme === 'light'
        ? LIGHT.secondary.contrastText
        : DARK.secondary.contrastText,
    50: theme === 'light' ? COLORS.zinc[50] : blueGrey[50],
    100: theme === 'light' ? COLORS.zinc[100] : blueGrey[100],
    200: theme === 'light' ? COLORS.zinc[200] : blueGrey[200],
    300: theme === 'light' ? COLORS.zinc[300] : blueGrey[300],
    400: theme === 'light' ? COLORS.zinc[400] : blueGrey[400],
    500: theme === 'light' ? COLORS.zinc[500] : blueGrey[500],
    600: theme === 'light' ? COLORS.zinc[600] : blueGrey[600],
    700: theme === 'light' ? COLORS.zinc[700] : blueGrey[700],
    800: theme === 'light' ? COLORS.zinc[800] : blueGrey[800],
    900: theme === 'light' ? COLORS.zinc[900] : blueGrey[900],
    950: theme === 'light' ? COLORS.zinc[950] : darken(blueGrey[900], 0.9),
    A100: theme === 'light' ? lighten(COLORS.zinc[100], 0.1) : blueGrey.A100,
    A200: theme === 'light' ? lighten(COLORS.zinc[200], 0.2) : blueGrey.A200,
    A400: theme === 'light' ? alpha(COLORS.zinc[400], 0.4) : blueGrey.A400,
    A700: theme === 'light' ? darken(COLORS.zinc[700], 0.7) : blueGrey.A700,
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

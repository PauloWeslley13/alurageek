import { Theme } from '@mui/material'
import { Button } from './types'
import { usePrimary } from './variants'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    default: true
    primary: true
    secondary: true
  }
}

const useButton = (theme: Theme) => {
  const { primaryStyles, hoverPrimaryStyles, activePrimaryStyles } =
    usePrimary(theme)

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: false,
        disableFocusRipple: false,
        disableRipple: false,
      } satisfies Button.DefaultProps,
      styleOverrides: {
        root: {},
        contained: {},
        outlined: {},
      } satisfies Button.StyleOverridesProps,
      variants: [
        {
          props: { variant: 'default', disableElevation: false },
          style: {},
        },
        {
          props: { variant: 'primary', disableElevation: false },
          style: {
            ...primaryStyles,
            ...activePrimaryStyles,
            ...hoverPrimaryStyles,
          },
        },
        {
          props: { variant: 'secondary', disableElevation: false },
          style: {},
        },
      ] satisfies Button.VariantsProps,
    },
  }
}

export { useButton }

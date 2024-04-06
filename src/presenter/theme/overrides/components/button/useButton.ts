import { Theme } from '@mui/material'
import { Button } from './types'
import { useContained, usePrimary, useSecondary } from './variants'

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

  const {
    activeSecondaryStyles,
    focusVisibleStyles,
    hoverSecondaryStyles,
    secondaryStyles,
  } = useSecondary(theme)

  const {
    activeContainedStyles,
    focusVisibleContainedStyles,
    hoverContainedStyles,
    containedStyles,
  } = useContained(theme)

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: false,
        disableFocusRipple: false,
        disableRipple: false,
      } satisfies Button.DefaultProps,
      styleOverrides: {
        root: {},
        contained: {
          ...containedStyles,
          ...activeContainedStyles,
          ...hoverContainedStyles,
          ...focusVisibleContainedStyles,
        },
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
          style: {
            ...secondaryStyles,
            ...activeSecondaryStyles,
            ...hoverSecondaryStyles,
            ...focusVisibleStyles,
          },
        },
      ] satisfies Button.VariantsProps,
    },
  }
}

export { useButton }

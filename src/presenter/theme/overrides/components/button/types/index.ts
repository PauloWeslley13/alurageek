/* eslint-disable prettier/prettier */
import { ButtonClasses, ButtonProps, Interpolation } from '@mui/material'
import { OverridesStyleRules } from '@mui/material/styles/overrides'

export namespace Button {
  export type DefaultProps = Partial<ButtonProps> | undefined

  export type VariantsProps =
    | {
      props: Partial<ButtonProps>
      style: Interpolation<{
        theme: unknown
      }>
    }[]
    | undefined

  export type StyleOverridesProps =
    | Partial<OverridesStyleRules<keyof ButtonClasses, 'MuiButton', unknown>>
    | undefined
}

/* eslint-disable prettier/prettier */
import { OverridesStyleRules } from '@mui/material/styles/overrides'
import { OutlinedInputClasses } from '@mui/material'

export namespace Input {
  export type StyleOverridesProps =
    | Partial<
      OverridesStyleRules<
        keyof OutlinedInputClasses,
        'MuiOutlinedInput',
        unknown
      >
    >
    | undefined

}
import { ForwardedRef, forwardRef } from 'react'
import { Input as BaseInput, InputProps } from '@mui/base/Input'
import { InputElement } from './input-styles'

export const Input = forwardRef(function CustomInput(
  props: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />
})

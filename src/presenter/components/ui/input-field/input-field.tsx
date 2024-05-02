import { ComponentProps, forwardRef, InputHTMLAttributes } from 'react'
import * as S from './input-field-styles'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> &
  ComponentProps<typeof S.TextField>

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ ...rest }, ref) => <S.TextField {...rest} ref={ref} variant="filled" />,
)

InputField.displayName = 'InputField'

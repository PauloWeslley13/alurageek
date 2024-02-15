import { ButtonHTMLAttributes, ComponentProps, ElementType } from 'react'
import * as S from './button-styles'

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentProps<typeof S.ButtonIcon> & {
    props: {
      label: string
      icon: ElementType
    }
  }

export const ButtonIcon = ({ props, ...rest }: ButtonIconProps) => {
  const { label, icon: Icon } = props

  return (
    <S.ButtonIcon {...rest}>
      {label} <Icon />
    </S.ButtonIcon>
  )
}

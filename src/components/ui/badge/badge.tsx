import { ComponentProps, ReactNode } from 'react'
import * as S from './badge-styles'

type ShoppingBadgeProps = ComponentProps<typeof S.Badge> & {
  children: ReactNode
}

export const ShoppingBadge = ({ children, ...rest }: ShoppingBadgeProps) => (
  <S.Badge {...rest}>
    <S.ButtonBadge>{children}</S.ButtonBadge>
  </S.Badge>
)

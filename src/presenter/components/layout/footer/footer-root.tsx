import { ComponentProps, ReactNode } from 'react'
import * as S from './footer-styles'

type FooterRootProps = ComponentProps<typeof S.FooterRootWrap> & {
  children: ReactNode
}

export const FooterRoot = ({ children }: FooterRootProps) => {
  return <S.FooterRootWrap>{children}</S.FooterRootWrap>
}

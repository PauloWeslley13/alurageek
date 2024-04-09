import { ComponentProps, ReactNode } from 'react'
import * as S from './footer-styles'

type FooterRootProps = ComponentProps<typeof S.FooterRootWrap> & {
  children: ReactNode
}

export const FooterRoot = ({ ...rest }: FooterRootProps) => {
  return <S.FooterRootWrap {...rest} />
}

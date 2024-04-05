import { ComponentProps, ReactNode } from 'react'
import * as S from './dialog-styles'

type DialogRootProps = ComponentProps<typeof S.DialogWrapper> & {
  children: ReactNode
}

const DialogRoot = ({ children, ...rest }: DialogRootProps) => (
  <S.DialogWrapper {...rest}>{children}</S.DialogWrapper>
)

export default DialogRoot

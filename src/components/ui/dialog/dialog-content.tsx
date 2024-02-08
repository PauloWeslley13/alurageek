import { ComponentProps, ReactNode } from 'react'
import * as S from './dialog-styles'

type DialogContentProps = ComponentProps<typeof S.DialogBody> & {
  children: ReactNode
}

const DialogContent = ({ children, ...rest }: DialogContentProps) => (
  <S.DialogBody {...rest}>{children}</S.DialogBody>
)

export default DialogContent

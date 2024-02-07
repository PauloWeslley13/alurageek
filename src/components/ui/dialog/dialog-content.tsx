import { ComponentProps, ReactNode } from 'react'
import { styled } from '@mui/material'
import MuiDialogContent, {
  DialogContentProps as MuiDialogContentProps,
} from '@mui/material/DialogContent'

const DialogBody = styled(MuiDialogContent)<MuiDialogContentProps>(
  ({ theme }) => ({
    background: theme.palette.background.default,
  }),
)

type DialogContentProps = ComponentProps<typeof DialogBody> & {
  children: ReactNode
}

const DialogContent = ({ children, ...rest }: DialogContentProps) => (
  <DialogBody {...rest}>{children}</DialogBody>
)

export default DialogContent

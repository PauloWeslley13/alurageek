import { ComponentProps, ReactNode } from 'react'
import { Theme } from '@mui/material'
import MuiDialogContent from '@mui/material/DialogContent'

type DialogContentProps = ComponentProps<typeof MuiDialogContent> & {
  children: ReactNode
}

const DialogContent = ({ children, ...rest }: DialogContentProps) => (
  <MuiDialogContent
    {...rest}
    sx={{ background: (theme: Theme) => theme.palette.background.default }}
  >
    {children}
  </MuiDialogContent>
)

export default DialogContent

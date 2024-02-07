import { ComponentProps, ReactNode } from 'react'
import MuiDialogActions from '@mui/material/DialogActions'
import { Theme } from '@mui/material'

type DialogActionsProps = ComponentProps<typeof MuiDialogActions> & {
  children: ReactNode
}

const DialogActions = ({ children, ...rest }: DialogActionsProps) => (
  <MuiDialogActions
    {...rest}
    sx={{ background: (theme: Theme) => theme.palette.background.default }}
  >
    {children}
  </MuiDialogActions>
)

export default DialogActions

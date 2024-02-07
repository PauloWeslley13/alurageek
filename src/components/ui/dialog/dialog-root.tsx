import { ComponentProps, ReactNode } from 'react'
import Dialog from '@mui/material/Dialog'

type DialogRootProps = ComponentProps<typeof Dialog> & { children: ReactNode }

const DialogRoot = ({ children, ...rest }: DialogRootProps) => (
  <Dialog {...rest} sx={{ '& .MuiPaper-root': { borderRadius: '18px' } }}>
    {children}
  </Dialog>
)

export default DialogRoot

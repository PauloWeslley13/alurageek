import { Theme } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import { ComponentProps } from 'react'

type DialogHeaderProps = ComponentProps<typeof DialogTitle> & {
  title: string
}

const DialogHeader = ({ title, ...rest }: DialogHeaderProps) => (
  <DialogTitle
    {...rest}
    sx={{ background: (theme: Theme) => theme.palette.background.default }}
  >
    <Typography variant="h4" color="primary">
      {title}
    </Typography>
  </DialogTitle>
)

export default DialogHeader

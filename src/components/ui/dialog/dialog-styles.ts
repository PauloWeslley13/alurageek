import { styled } from '@mui/material'
import MuiDialogContent, {
  DialogContentProps as MuiDialogContentProps,
} from '@mui/material/DialogContent'
import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog'
import MuiDialogTitle, {
  DialogTitleProps as MuiDialogTitleProps,
} from '@mui/material/DialogTitle'

export const DialogWrapper = styled(MuiDialog)<MuiDialogProps>(() => ({
  '& .MuiPaper-root': { borderRadius: '18px' },
}))

export const DialogBody = styled(MuiDialogContent)<MuiDialogContentProps>(
  ({ theme }) => ({
    background: theme.palette.background.default,
  }),
)

export const DialogHead = styled(MuiDialogTitle)<MuiDialogTitleProps>(
  ({ theme }) => ({
    background: theme.palette.background.default,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
)

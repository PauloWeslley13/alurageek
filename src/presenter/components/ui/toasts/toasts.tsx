import { CircularProgress, Stack, Typography } from '@mui/material'
import { toast, ToastContent } from 'react-toastify'

type ToastifyProps = {
  title: ToastContent
}

const LoaderToast = ({ text }: { text: string }) => (
  <Stack flexDirection="row" alignItems="center" gap={6}>
    <CircularProgress size={25} />
    <Typography component="span" variant="h4">
      {text}
    </Typography>
  </Stack>
)

export const toasts = {
  success: ({ title }: ToastifyProps) => toast.success(title),
  warn: ({ title }: ToastifyProps) => toast.warn(title),
  error: ({ title }: ToastifyProps) => toast.error(title),
  loader: ({ title }: { title: string }) => toast(<LoaderToast text={title} />),
}

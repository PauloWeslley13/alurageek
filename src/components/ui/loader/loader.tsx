import { ComponentProps } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

type LoaderProps = ComponentProps<typeof Stack> & {
  label: string
}

export const Loader = ({ label, ...rest }: LoaderProps) => (
  <Stack
    flexDirection="row"
    alignItems="center"
    justifyContent="center"
    {...rest}
  >
    <CircularProgress size={150} />
    <Typography component="h3" variant="h4">
      {label}
    </Typography>
  </Stack>
)

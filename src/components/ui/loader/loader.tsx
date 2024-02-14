import { Stack, CircularProgress } from '@mui/material'

export const Loader = () => (
  <Stack alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
    <CircularProgress size={150} />
  </Stack>
)

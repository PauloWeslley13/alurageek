import { Theme, styled } from '@mui/material'

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(24),
  marginInline: theme.spacing(75),

  '& > form': {
    marginTop: theme.spacing(5),
    paddingInline: theme.spacing(75),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
}))

export const ButtonStyles = (theme: Theme) => ({
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  width: theme.spacing(40),
  height: theme.spacing(12),
})

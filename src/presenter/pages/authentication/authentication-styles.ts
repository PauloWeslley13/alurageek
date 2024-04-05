import { styled } from '@mui/material'

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(24),
  marginInline: theme.spacing(95),

  paddingBlock: theme.spacing(25),

  '& > form': {
    marginTop: theme.spacing(5),
    paddingInline: theme.spacing(75),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
}))

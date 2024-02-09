import { styled } from '@mui/material'

export const ProductInfoContainer = styled('div')(({ theme }) => ({
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

    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(1),
      paddingInline: theme.spacing(2),
    },
  },

  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(10),
    marginInline: theme.spacing(5),
  },

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    marginTop: theme.spacing(5),
    marginInline: theme.spacing(1),
  },
}))

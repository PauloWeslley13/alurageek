import { styled } from '@mui/material'
import { indigo } from '@mui/material/colors'
import { COLORS } from '@/styles'

export const FooterRootWrap = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

export const FooterBar = styled('footer')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: theme.spacing(1),

  padding: theme.spacing(5),
  background: COLORS.zinc[100],
}))

export const FooterBody = styled('footer')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 545px',
  gridTemplateRows: 'auto',
  columnGap: theme.spacing(11.2),

  marginTop: theme.spacing(12),
  padding: theme.spacing(15.4, 75),
  background: theme.palette.mode === 'light' ? COLORS.violet[200] : indigo[100],

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    padding: theme.spacing(5, 10),
  },
}))

export const FooterList = styled('div')(({ theme }) => ({
  '& > ul': {
    listStyleType: 'none',
    padding: theme.spacing(1),

    display: 'flex',
    gap: theme.spacing(2.4),
    flexDirection: 'column',

    '& > li': {
      ...theme.typography.h5,
      color: theme.palette.primary.dark,
    },

    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
}))

export const FooterForm = styled('div')(({ theme }) => ({
  '& > form': {
    marginTop: theme.spacing(1.9),

    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}))

export const FooterContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  gap: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
}))

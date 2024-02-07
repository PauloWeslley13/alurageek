import { styled } from '@mui/material'
import { indigo } from '@mui/material/colors'
import { COLORS } from '@/styles'

export const Footer = styled('footer')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: theme.spacing(1),

  padding: theme.spacing(5),
  background: COLORS.zinc[100],
}))

export const FooterBar = styled('footer')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 545px',
  gridTemplateRows: 'auto',
  columnGap: theme.spacing(11.2),

  marginTop: theme.spacing(12),
  padding: theme.spacing(15.4, 75),
  background: theme.palette.mode === 'light' ? COLORS.violet[200] : indigo[100],

  '& .MuiFooterBar': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
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
  },
}))

export const FooterForm = styled('div')(({ theme }) => ({
  '& > form': {
    marginTop: theme.spacing(1.9),

    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}))

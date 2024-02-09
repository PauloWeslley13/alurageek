import { styled } from '@mui/material'

export const ProductContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'auto',
  columnGap: theme.spacing(2),

  margin: theme.spacing(22, 72.5),

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    margin: theme.spacing(5, 8),
  },

  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(4, 7),
  },

  '& img': {
    width: theme.spacing(156.5),
    height: theme.spacing(140.5),
    objectFit: 'cover',

    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 'auto',
    },
  },

  '& .MuiCardProductInfo': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: theme.spacing(2),

    color: theme.palette.grey[800],
  },
}))

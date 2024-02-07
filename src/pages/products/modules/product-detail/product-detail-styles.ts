import { styled } from '@mui/material'

export const ProductContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'auto',
  columnGap: theme.spacing(2),

  margin: theme.spacing(22, 65.5),

  '& img': {
    width: theme.spacing(156.5),
    height: theme.spacing(140.5),
    objectFit: 'cover',
  },

  '& .MuiCardProductInfo': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: theme.spacing(2),

    color: theme.palette.grey[800],
  },
}))

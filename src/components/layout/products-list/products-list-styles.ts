import { styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  marginInline: theme.spacing(65.5),
  padding: theme.spacing(5.5),

  '& > div:nth-of-type(1)': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
}))

export const Products = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: theme.spacing(8),
}))

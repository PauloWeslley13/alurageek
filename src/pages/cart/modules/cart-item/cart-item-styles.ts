import { styled } from '@mui/material'

export const CartItemWrap = styled('div')(() => ({
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

export const CartItemContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(10),

  width: theme.spacing(130),

  '& img': {
    width: theme.spacing(30),
    height: theme.spacing(30),
    objectFit: 'cover',
  },

  '& .MuiCartItem-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: theme.spacing(80),

    '& .MuiCartItemContent-root': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
}))

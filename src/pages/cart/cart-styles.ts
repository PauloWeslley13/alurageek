import { styled } from '@mui/material'

export const CartWrap = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 414px',
  gridTemplateRows: 'auto',
  columnGap: theme.spacing(0.75),

  marginInline: theme.spacing(65.5),
  padding: theme.spacing(5.5),
}))

export const CartItemProduct = styled('div')(({ theme }) => ({
  width: '100%',

  border: `1px solid ${theme.palette.grey[300]}`,
  background: theme.palette.grey[100],
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1.9),
}))

export const CartItemInfo = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}))

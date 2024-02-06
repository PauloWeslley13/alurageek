import { styled } from '@mui/system'

export const CardProduct = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexBasis: theme.spacing(12),
  flexGrow: 1,
  flexShrink: 1,

  padding: theme.spacing(0.5),

  '& > img': {
    width: '100%',
    height: theme.spacing(50),
    objectFit: 'cover',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
}))

import { styled } from '@mui/system'

export const NavBarWrap = styled('nav')(({ theme }) => ({
  padding: theme.spacing(5.5),
  marginInline: theme.spacing(65.5),

  '& > div:nth-of-type(1)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',

    '& > div:nth-of-type(1)': {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(3.2),
    },

    '& > div:nth-of-type(2)': {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2.2),
    },
  },
}))

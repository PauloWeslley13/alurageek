import { styled } from '@mui/material'
import Badge, { BadgeProps } from '@mui/material/Badge'

export const BadgeCart = styled(Badge)<BadgeProps>(({ theme }) => ({
  color: theme.palette.primary.main,

  '& .MuiBadge-badge': {
    right: -3,
    top: 14,
    border: `2px solid ${theme.palette.background.paper}`,
    background: theme.palette.warning.light,
    color: theme.palette.common.black,
    padding: '9px 6px',
  },
}))

export const NavBarWrap = styled('nav')(({ theme }) => ({
  padding: theme.spacing(5.5),
  marginInline: theme.spacing(65.5),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    marginInline: theme.spacing(1),
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(5),
    marginInline: theme.spacing(1),
  },

  '& > div:nth-of-type(1)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },

    '& > div:nth-of-type(1)': {
      display: 'flex',
      alignItems: 'center',

      gap: theme.spacing(3.2),

      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(5),
      },
    },

    '& > div:nth-of-type(2)': {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2.2),
    },
  },
}))

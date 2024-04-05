import { alpha, styled } from '@mui/material'
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material/IconButton'
import { COLORS } from '@/presenter/styles'

export const CardProduct = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexBasis: theme.spacing(12),
  flexGrow: 1,
  flexShrink: 1,

  padding: theme.spacing(0.5),

  '& .MuiCardProductInfo': {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}))

type CardProductImageProps = { imageUrl: string }

export const CardProductImage = styled('div')<CardProductImageProps>(
  ({ theme, imageUrl }) => ({
    background: `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    width: '100%',
    height: theme.spacing(50),
    padding: theme.spacing(0.75),
    backdropFilter: 'blur(10px)',

    display: 'flex',
    justifyContent: 'flex-end',

    transition: 'all 0.3s ease-in-out',

    '& div': {
      display: 'none',
      opacity: 0,
    },

    ' :hover': {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(to bottom, ${COLORS.zinc[500]}, rgba(0,0,0, .7))`,
        backdropFilter: 'blur(10px)',
        opacity: 0.2,
        zIndex: -1,
      },

      '& div': {
        display: 'block',
        opacity: 1,
      },
    },
  }),
)

export const CardButton = styled(MuiIconButton)<MuiIconButtonProps>(
  ({ theme }) => ({
    color: theme.palette.primary.contrastText,

    ' :hover': {
      background: alpha(COLORS.zinc[50], 0.3),
    },
  }),
)

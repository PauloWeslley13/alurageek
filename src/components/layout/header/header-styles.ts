import { styled } from '@mui/material'
import { FONTS } from '@/styles'

type HeadingProps = { imageUrl: string }

export const Heading = styled('header')<HeadingProps>(
  ({ theme, imageUrl }) => ({
    background: `url(${imageUrl})`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    height: theme.spacing(116),
    padding: theme.spacing(8),

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',

    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(4),
      marginLeft: theme.spacing(61.5),
      color: theme.palette.common.white,

      '& h3': {
        ...theme.typography.h1,
        fontSize: FONTS.fontSizes['6xl'],
      },

      '& span': {
        ...theme.typography.subtitle1,
      },
    },
  }),
)

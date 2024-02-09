import { ComponentProps, ReactNode } from 'react'
import Typography from '@mui/material/Typography'
import * as S from './dialog-styles'
import { FONTS } from '@/styles'

type DialogHeaderProps = ComponentProps<typeof S.DialogHead> & {
  title?: string
  children?: ReactNode
}

const DialogHeader = ({ title, children, ...rest }: DialogHeaderProps) => (
  <S.DialogHead {...rest}>
    <Typography
      component="h3"
      variant="h4"
      color="primary"
      sx={{
        fontSize: FONTS.fontSizes.xl,
        fontWeight: FONTS.fontWeight.bold,
        textTransform: 'capitalize',
      }}
    >
      {title}
    </Typography>

    {children}
  </S.DialogHead>
)

export default DialogHeader

import { ComponentProps, ReactNode } from 'react'
import Typography from '@mui/material/Typography'
import { FONTS } from '@/styles'
import * as S from './dialog-styles'

type DialogHeaderProps = ComponentProps<typeof S.DialogHead> & {
  title?: string
  children?: ReactNode
}

const DialogHeader = ({ title, children, ...rest }: DialogHeaderProps) => (
  <S.DialogHead {...rest}>
    <Typography
      component="span"
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

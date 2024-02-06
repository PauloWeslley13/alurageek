import { Theme } from '@mui/material'
import Typography from '@mui/material/Typography'
import * as S from './footer-styles'

export const Footer = () => {
  return (
    <S.Footer>
      <Typography
        component="h4"
        variant="h5"
        sx={{ color: (theme: Theme) => theme.palette.grey.A700 }}
      >
        Desarrollado por Fulana de Tal
      </Typography>
      <Typography
        component="span"
        variant="subtitle1"
        sx={{ color: (theme: Theme) => theme.palette.grey.A700 }}
      >
        2021
      </Typography>
    </S.Footer>
  )
}

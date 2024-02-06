import { useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Btn, Button } from '@/components/ui'
import BannerHeader from '@/assets/Hero.svg'
import * as S from './header-styles'

export const Header = () => {
  const theme = useTheme()

  return (
    <S.Heading imageUrl={BannerHeader}>
      <div>
        <h3>Febrero Promocional</h3>
        <span>Productos selecionados con 33% de descuento</span>
        <Button
          label="Ver Consolas"
          sx={{
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
            borderColor: theme.palette.primary.dark,
            width: theme.spacing(40),
            height: theme.spacing(12),
          }}
        />
        <Btn
          label="Ver Consolas"
          sx={{
            border: 'none',
            width: theme.spacing(40),
            height: theme.spacing(12),
          }}
          endIcon={<ArrowForwardIcon />}
        />
      </div>
    </S.Heading>
  )
}

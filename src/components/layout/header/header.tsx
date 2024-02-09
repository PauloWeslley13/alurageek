import { useTheme } from '@mui/material'
import { Button } from '@/components/ui'
import BannerHeader from '@/assets/Hero.svg'
import * as S from './header-styles'

export const Header = () => {
  const theme = useTheme()

  return (
    <S.Heading imageUrl={BannerHeader}>
      <div>
        <h3>Fevereiro Promocional</h3>
        <span>Produtos selecionados com 33% de desconto</span>
        <Button
          label="Promoções"
          sx={{
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
            borderColor: theme.palette.primary.dark,
            width: theme.spacing(40),
            height: theme.spacing(12),
          }}
        />
      </div>
    </S.Heading>
  )
}

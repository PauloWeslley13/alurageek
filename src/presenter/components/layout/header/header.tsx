import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'

import BannerHeader from '@/presenter/assets/Hero.svg'
import * as S from './header-styles'

export const Header = () => {
  const theme = useTheme()

  return (
    <S.Heading imageUrl={BannerHeader}>
      <div>
        <h3>Fevereiro Promocional</h3>
        <span>Produtos selecionados com 33% de desconto</span>
        <Button
          variant="primary"
          sx={{
            width: theme.spacing(40),
            height: theme.spacing(12),
          }}
        >
          Promoções
        </Button>
      </div>
    </S.Heading>
  )
}

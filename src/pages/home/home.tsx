import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Header, ProductsList } from '@/components/layout'
import { ButtonIcon } from '@/components/ui'
import { COLORS, FONTS } from '@/styles'

export const Home = () => {
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <section>
      <Header />

      <ProductsList title="StarWars">
        <ButtonIcon
          onClick={() => navigate('/product/list')}
          props={{
            label: 'Ver todos',
            icon: ArrowForwardIcon,
          }}
          sx={{
            border: 'none',
            background: 'transparent',
            fontSize: FONTS.fontSizes.md,
            height: theme.spacing(8),
            color: COLORS.violet[500],
          }}
        />
      </ProductsList>
    </section>
  )
}

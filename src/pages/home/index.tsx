import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Header, ProductsList } from '@/components/layout'
import { Btn } from '@/components/ui'

export const Home = () => {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <section>
      <Header />

      <ProductsList title="StarWars">
        <Btn
          label="Ver todos"
          onClick={() => navigate('/product/list')}
          sx={{
            border: 'none',
            width: theme.spacing(35),
            height: theme.spacing(10),
          }}
          endIcon={<ArrowForwardIcon />}
        />
      </ProductsList>
    </section>
  )
}

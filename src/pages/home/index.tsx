import { Theme, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Typography from '@mui/material/Typography'
import { Btn, CardProduct } from '@/components/ui'
import { useAppSelector } from '@/store/hook/useRedux'
import { Header } from '@/components/layout'
import * as S from './home-styles'

export const Home = () => {
  const products = useAppSelector((state) => state.products)
  const theme = useTheme()

  return (
    <section>
      <Header />

      <S.Container>
        <div>
          <Typography
            component="h3"
            variant="h2"
            sx={{ color: (theme: Theme) => theme.palette.grey[900] }}
          >
            StarWars
          </Typography>

          <Btn
            label="Ver todos"
            sx={{
              border: 'none',
              width: theme.spacing(35),
              height: theme.spacing(10),
            }}
            endIcon={<ArrowForwardIcon />}
          />
        </div>

        <S.Products>
          {products.map((item, index) => (
            <CardProduct key={index} card={item} />
          ))}
        </S.Products>
      </S.Container>
      <S.Container>
        <div>
          <Typography
            component="h3"
            variant="h2"
            sx={{ color: (theme: Theme) => theme.palette.grey[900] }}
          >
            StarWars
          </Typography>

          <Btn
            label="Ver todos"
            sx={{
              border: 'none',
              width: theme.spacing(35),
              height: theme.spacing(10),
            }}
            endIcon={<ArrowForwardIcon />}
          />
        </div>

        <S.Products>
          {products.map((item, index) => (
            <CardProduct key={index} card={item} />
          ))}
        </S.Products>
      </S.Container>
      <S.Container>
        <div>
          <Typography
            component="h3"
            variant="h2"
            sx={{ color: (theme: Theme) => theme.palette.grey[900] }}
          >
            StarWars
          </Typography>

          <Btn
            label="Ver todos"
            sx={{
              border: 'none',
              width: theme.spacing(35),
              height: theme.spacing(10),
            }}
            endIcon={<ArrowForwardIcon />}
          />
        </div>

        <S.Products>
          {products.map((item, index) => (
            <CardProduct key={index} card={item} />
          ))}
        </S.Products>
      </S.Container>
    </section>
  )
}

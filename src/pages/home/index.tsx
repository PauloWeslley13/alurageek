import { useEffect } from 'react'
import { Theme, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Typography from '@mui/material/Typography'
import { Btn, CardProduct } from '@/components/ui'
import { useAppDispatch, useAppSelector } from '@/store/hook/useRedux'
import { fetchProducts } from '@/store/reducers/products'
import { Header } from '@/components/layout'
import * as S from './home-styles'

export const Home = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products)
  console.log(products)
  const theme = useTheme()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

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
    </section>
  )
}

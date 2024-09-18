import Button from '@mui/material/Button'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import { Header, ProductsList } from '@/presenter/components/layout'
import { useHome } from './hook/useHome'

function Home() {
  const { searchingProducts, isLoading, navigate } = useHome()

  return (
    <>
      <Header />

      {searchingProducts.map((props) => {
        return (
          <ProductsList
            key={props.id}
            title={props.name}
            products={props.products}
            isLoading={isLoading}
          >
            <Button
              variant="secondary"
              endIcon={<ArrowForwardIosRoundedIcon />}
              onClick={() => navigate('/product-list')}
              sx={{
                fontSize: (theme) => theme.typography.font.sm,
                height: (theme) => theme.spacing(8),
              }}
            >
              Ver todos
            </Button>
          </ProductsList>
        )
      })}
    </>
  )
}

export default Home

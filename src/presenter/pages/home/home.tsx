import { useNavigate } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import { Header, ProductsList } from '@/presenter/components/layout'
import { useHome } from './hook/useHome'

function Home() {
  const {
    searchingProducts,
    loadSearchingCategories,
    isLoading,
    hasMore,
    loadMoreProducts,
  } = useHome()
  const navigate = useNavigate()

  return (
    <>
      <Header />

      {loadSearchingCategories.map((props) => (
        <ProductsList
          key={props.id}
          title={props.name}
          products={props.products || []}
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
      ))}

      {hasMore < searchingProducts.length && (
        <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button
            variant="default"
            sx={{ width: 'fit-content' }}
            onClick={loadMoreProducts}
          >
            Carrega mais produtos
          </Button>
        </Stack>
      )}
    </>
  )
}

export default Home

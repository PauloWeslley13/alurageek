import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { ProductsList } from '@/presenter/components/layout'
import { useHome } from './hook/useHome'
import { StyledHeading } from './styles'

function Home() {
  const {
    categories,
    productsByCategory,
    menuCategory,
    productIsLoading,
    navigate,
    handleMenuNavigate,
  } = useHome()

  return (
    <>
      <StyledHeading>
        <div>
          <h3>Fevereiro Promocional</h3>
          <span>Produtos selecionados com 33% de desconto</span>

          <Button
            variant="primary"
            sx={{
              width: (theme) => theme.spacing(40),
              height: (theme) => theme.spacing(12),
            }}
          >
            Promoções
          </Button>
        </div>
      </StyledHeading>

      <Container>
        <Stack direction="row" spacing={2} sx={{ marginTop: 5 }}>
          {categories.map((category) => {
            return (
              <Chip
                key={category.id}
                label={category.name}
                color={category.name === menuCategory ? 'primary' : 'default'}
                variant={category.name === menuCategory ? 'filled' : 'outlined'}
                onClick={() => handleMenuNavigate(category.name, category.id)}
              />
            )
          })}
        </Stack>
      </Container>

      <ProductsList
        title=""
        products={productsByCategory}
        isLoading={productIsLoading}
      >
        {productsByCategory.length !== 0 && (
          <Button
            variant="secondary"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/product-list')}
            sx={{
              fontSize: (theme) => theme.typography.font.sm,
              height: (theme) => theme.spacing(8),
            }}
          >
            Ver todos
          </Button>
        )}
      </ProductsList>
    </>
  )
}

export default Home

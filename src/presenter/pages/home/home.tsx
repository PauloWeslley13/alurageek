import { useNavigate } from 'react-router-dom'
import { Button, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Header, ProductsList } from '@/presenter/components/layout'
import { ButtonIcon } from '@/presenter/components/ui'
import { useProductsFilter } from '@/presenter/hooks/useProductsFilter'
import { COLORS, FONTS } from '@/presenter/styles'

export const Home = () => {
  const { categoryByProduct, productsFilter, isLoading } = useProductsFilter()
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <section>
      <Header />

      <ProductsList
        props={{
          title: 'StarWars',
          productList: productsFilter,
          isLoading,
        }}
      >
        <Button
          variant="secondary"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate('/product/list')}
          sx={{
            fontSize: FONTS.fontSizes.md,
            height: theme.spacing(8),
          }}
        >
          Ver todos
        </Button>
      </ProductsList>

      {categoryByProduct.map((props) => (
        <ProductsList
          key={props.id}
          props={{
            title: props.name,
            productList: props.products,
            isLoading,
          }}
        >
          <ButtonIcon
            onClick={() => navigate(`/category/${props.id}`)}
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
      ))}
    </section>
  )
}

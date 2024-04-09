import { useNavigate } from 'react-router-dom'
import { Button, useTheme } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useAppSelector } from '@/main/store/hook/useRedux'
import { useProductsFilter } from '@/presenter/hooks/useProductsFilter'
import { ProductsList } from '@/presenter/components/layout'

export const ProductListItems = () => {
  const { productsFilter, isLoading } = useProductsFilter()
  const { isLogged } = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <ProductsList
      props={{
        title: 'Todos produtos',
        productList: productsFilter,
        isLoading,
      }}
    >
      {isLogged && (
        <Button
          onClick={() => navigate('/product/info')}
          startIcon={<AddCircleOutlineIcon />}
          sx={{
            borderColor: theme.palette.primary.light,
            height: theme.spacing(10),
          }}
        >
          Adicionar produto
        </Button>
      )}
    </ProductsList>
  )
}

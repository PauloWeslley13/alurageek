import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import { ProductsList } from '@/components/layout'
import { Button } from '@/components/ui'

export const ProductListItems = () => {
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <ProductsList title="Todos los produtos">
      <Button
        label="Agregar producto"
        onClick={() => navigate('/product/info')}
        sx={{
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
          borderColor: theme.palette.primary.light,
          width: theme.spacing(50),
          height: theme.spacing(10),
        }}
      />
    </ProductsList>
  )
}

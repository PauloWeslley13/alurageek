import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import { ProductsList } from '@/components/layout'
import { Button } from '@/components/ui'

export const ProductListItems = () => {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <ProductsList title="Todos los produtos">
      <Button
        label="Agregar producto"
        onClick={() => navigate('/product/info')}
        sx={{
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
          borderColor: theme.palette.primary.dark,
          width: theme.spacing(45),
          height: theme.spacing(10),
        }}
      />
    </ProductsList>
  )
}

import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { ProductsList } from '@/components/layout'
import { Btn } from '@/components/ui'
import { useAppSelector } from '@/store/hook/useRedux'

export const ProductListItems = () => {
  const { isLogged } = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <ProductsList title="Todos produtos">
      {isLogged && (
        <Btn
          label="Adicionar Produto"
          onClick={() => navigate('/product/info')}
          endIcon={<AddCircleOutlineIcon />}
          sx={{
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
            borderColor: theme.palette.primary.light,
            width: theme.spacing(55),
            height: theme.spacing(10),
          }}
        />
      )}
    </ProductsList>
  )
}

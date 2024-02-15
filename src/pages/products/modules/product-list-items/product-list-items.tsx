import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { ProductsList } from '@/components/layout'
import { ButtonIcon } from '@/components/ui'
import { useAppSelector } from '@/store/hook/useRedux'

export const ProductListItems = () => {
  const { isLogged } = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <ProductsList title="Todos produtos">
      {isLogged && (
        <ButtonIcon
          onClick={() => navigate('/product/info')}
          props={{
            label: 'Adicionar produto',
            icon: AddCircleOutlineIcon,
          }}
          sx={{
            borderColor: theme.palette.primary.light,
            height: theme.spacing(10),
          }}
        />
      )}
    </ProductsList>
  )
}

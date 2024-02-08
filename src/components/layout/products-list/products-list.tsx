import { ReactNode, useEffect } from 'react'
import { Stack, Typography, useTheme } from '@mui/material'
import { CardProduct } from '@/components/ui'
import { useAppDispatch } from '@/store/hook/useRedux'
import * as S from './products-list-styles'
import { loadProduct } from '@/store/actions'
import { useProducts } from '@/hooks/useProducts'

type ProductsListProps = {
  title: string
  children?: ReactNode
}

export const ProductsList = ({ title, children }: ProductsListProps) => {
  const { productsFilter } = useProducts()
  const dispatch = useAppDispatch()
  const theme = useTheme()

  useEffect(() => {
    dispatch(loadProduct())
  }, [dispatch])

  return (
    <S.Container>
      <div>
        <Typography
          component="h3"
          variant="h2"
          sx={{ color: theme.palette.grey[900] }}
        >
          {title}
        </Typography>

        {children}
      </div>

      {productsFilter.length !== 0 ? (
        <S.Products>
          {productsFilter.map((item, index) => (
            <CardProduct key={index} card={item} />
          ))}
        </S.Products>
      ) : (
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ margin: theme.spacing(15) }}
        >
          <Typography
            component="h3"
            variant="h2"
            sx={{ color: theme.palette.grey[900] }}
          >
            Produtos indisponível
          </Typography>
        </Stack>
      )}
    </S.Container>
  )
}

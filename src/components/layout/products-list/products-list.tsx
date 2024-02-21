import { ReactNode, useEffect } from 'react'
import { CircularProgress, Stack, Typography, useTheme } from '@mui/material'
import { CardProduct } from '@/components/ui'
import { useAppDispatch } from '@/store/hook/useRedux'
import { loadProduct } from '@/store/actions/actions'
import { useProductsFilter } from '@/hooks/useProductsFilter'
import * as S from './products-list-styles'

type ProductsListProps = {
  title: string
  children?: ReactNode
}

export const ProductsList = ({ title, children }: ProductsListProps) => {
  const { productsFilter, isLoading } = useProductsFilter()
  const dispatch = useAppDispatch()
  const theme = useTheme()

  console.log(isLoading)

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
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
          sx={{ margin: theme.spacing(15) }}
        >
          {isLoading && <CircularProgress size={35} />}
          <Typography
            component="h3"
            variant="h2"
            sx={{ color: theme.palette.grey[900] }}
          >
            {isLoading ? 'Carregando produtos' : 'Produtos indisponível'}
          </Typography>
        </Stack>
      )}
    </S.Container>
  )
}

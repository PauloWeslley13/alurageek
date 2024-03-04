import { ReactNode } from 'react'
import { CircularProgress, Stack, Typography, useTheme } from '@mui/material'
import { CardProduct } from '@/components/ui'
import { ProductsProps } from '@/components/types'
import * as S from './products-list-styles'

type ProductsListProps = {
  props: {
    title: string
    productList: ProductsProps[]
    isLoading: boolean
  }
  children?: ReactNode
}

export const ProductsList = ({ props, children }: ProductsListProps) => {
  const { title, isLoading, productList } = props
  const theme = useTheme()

  return (
    <S.Container>
      <div>
        <Typography component="h3" variant="h2" color={theme.palette.grey[900]}>
          {title}
        </Typography>

        {children}
      </div>

      {productList.length !== 0 ? (
        <S.Products>
          {productList.map((item, index) => (
            <CardProduct key={index} card={item} />
          ))}
        </S.Products>
      ) : (
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
          margin={theme.spacing(15)}
        >
          {isLoading && <CircularProgress size={35} />}
          <Typography
            component="h3"
            variant="h2"
            color={theme.palette.grey[900]}
          >
            {isLoading ? 'Carregando produtos' : 'Produtos indisponível'}
          </Typography>
        </Stack>
      )}
    </S.Container>
  )
}

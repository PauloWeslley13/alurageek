import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { useFormatted } from '@/presenter/hooks/useFormatted'
import { useAppSelector } from '@/main/store/hook/useRedux'
import { ProductModel } from '@/data/models'
import { DialogDeleteProduct, DialogEditProduct } from './components'
import { useCardProduct } from './hook/useCardProduct'
import * as S from './styles'

type CardProductProps = {
  card: ProductModel
}

export function CardProduct({ card }: CardProductProps) {
  const { id, name, price, imageUrl } = card
  const { isLoading } = useAppSelector((state) => state.products)
  const { user } = useAppSelector((state) => state.authentication)
  const { handlerNavProductDetail } = useCardProduct()
  const { formatted } = useFormatted()

  if (isLoading) {
    return (
      <Stack
        component={Paper}
        elevation={1}
        sx={{
          width: 'fit-content',
          p: 5,
          borderRadius: 50,
          bgcolor: (theme) => theme.palette.primary.dark,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress color="inherit" size={65} />
      </Stack>
    )
  }

  return (
    <S.CardProduct>
      <S.CardProductImage imageUrl={imageUrl}>
        {user?.accessToken && (
          <div>
            <DialogDeleteProduct product={card} />

            <DialogEditProduct product={card} />
          </div>
        )}
      </S.CardProductImage>

      <S.CardProductBody>
        <Typography
          component="h2"
          variant="h5"
          sx={{
            textTransform: 'capitalize',
            textAlign: 'center',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </Typography>

        <Typography
          component="span"
          variant="subtitle1"
          sx={{ fontFamily: (theme) => theme.typography.font.OPEN_SANS }}
        >
          {formatted.priceMask(price)}
        </Typography>

        <Button
          variant="secondary"
          onClick={() => handlerNavProductDetail(id)}
          sx={{
            height: 30,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Ver produto
        </Button>
      </S.CardProductBody>
    </S.CardProduct>
  )
}

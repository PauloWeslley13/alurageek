import { Theme } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { DialogDeleteProduct } from './dialog-delete-product'
import { DialogEditProduct } from '@/presenter/pages/products/components'
import { ProductsProps } from '@/presenter/components/types'
import { useCardProduct } from './hook/useCardProduct'
import * as S from './card-product-styles'

type CardProductProps = {
  card: ProductsProps
}

export const CardProduct = ({ card }: CardProductProps) => {
  const { id, name, price, url } = card
  const { isLogged, navigate, format } = useCardProduct()

  return (
    <S.CardProduct>
      <S.CardProductImage imageUrl={url}>
        {isLogged && (
          <div>
            <DialogDeleteProduct product={card} />

            <DialogEditProduct product={card} />
          </div>
        )}
      </S.CardProductImage>

      <div className="MuiCardProductInfo">
        <Typography
          component="h2"
          variant="h4"
          sx={{
            color: (theme: Theme) => theme.palette.grey.A700,
            textTransform: 'capitalize',
          }}
        >
          {name}
        </Typography>
        <Typography
          component="span"
          variant="subtitle1"
          sx={{ color: (theme: Theme) => theme.palette.grey.A700 }}
        >
          {format.priceMask(price)}
        </Typography>

        <div>
          <Button
            variant="secondary"
            onClick={() => navigate(`/product/detail/${id}`)}
            sx={(theme) => ({ height: theme.spacing(8) })}
          >
            Ver produto
          </Button>
        </div>
      </div>
    </S.CardProduct>
  )
}

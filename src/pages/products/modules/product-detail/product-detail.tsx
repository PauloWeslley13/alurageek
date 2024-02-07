import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { useAppSelector } from '@/store/hook/useRedux'
import * as S from './product-detail-styles'
import { ProductsList } from '@/components/layout'
import { FONTS } from '@/styles'

export const ProductDetail = () => {
  const params = useParams()
  const products = useAppSelector((state) => state.products)
  const product = products.find((item) => item.id === params.id)

  return (
    <section>
      <S.ProductContainer>
        <div>
          <img src={product?.url} alt="Foto do produto" />
        </div>

        <div className="MuiCardProductInfo">
          <Typography
            component="h3"
            variant="h1"
            sx={{ fontSize: FONTS.fontSizes['6xl'] }}
          >
            {product?.name}
          </Typography>
          <Typography component="span" variant="h4">
            $ {product?.price}
          </Typography>
          <Typography component="p" variant="subtitle1">
            {product?.description}
          </Typography>
        </div>
      </S.ProductContainer>

      <ProductsList title="Productos similares" />
    </section>
  )
}

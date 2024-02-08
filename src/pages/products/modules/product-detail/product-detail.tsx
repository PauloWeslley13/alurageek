import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { useAppSelector } from '@/store/hook/useRedux'
import { ProductsList } from '@/components/layout'
import { FONTS } from '@/styles'
import * as S from './product-detail-styles'
import { ProductsProps } from '@/components/types/products-props'
import { priceMask } from '@/utils/price-mask'

export const ProductDetail = () => {
  const params = useParams()
  const products = useAppSelector((state) => state.products)
  const product = products.find((item) => item.id === params.id)
  const [prodDetail, setProdDetail] = useState<ProductsProps>(
    {} as ProductsProps,
  )

  useEffect(() => {
    if (product) {
      setProdDetail({
        id: product.id,
        name: product.name,
        categoria: product.categoria,
        description: product.description,
        price: priceMask({ value: product.price }),
        url: product.url,
      })
    }
  }, [product])

  return (
    <section>
      <S.ProductContainer>
        <div>
          <img src={prodDetail.url} alt="Foto do produto" />
        </div>

        <div className="MuiCardProductInfo">
          <Typography
            component="h3"
            variant="h1"
            sx={{ fontSize: FONTS.fontSizes['6xl'] }}
          >
            {prodDetail.name}
          </Typography>
          <Typography component="span" variant="h4">
            {/* {priceMask({ value: ! })} */}
            {prodDetail.price}
          </Typography>
          <Typography component="p" variant="subtitle1">
            {prodDetail.description}
          </Typography>
        </div>
      </S.ProductContainer>

      <ProductsList title="Productos similares" />
    </section>
  )
}

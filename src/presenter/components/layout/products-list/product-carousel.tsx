import { Stack } from '@mui/material'
import {
  CardProduct,
  Slide,
  SliderCarousel,
  SliderProps,
} from '@/presenter/components/ui'
import { ProductModel } from '@/data/models'

interface ProductCarouselProps {
  products: ProductModel[]
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const settings: SliderProps = {
    spaceBetween: 10,
    slidesPerView: products.length <= 9 ? products.length : 3,
    centeredSlides: true,
    grabCursor: true,
    draggable: products.length >= 3,
    loop: products.length >= 3,
    pagination: products.length >= 3 && {
      dynamicBullets: true,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        navigation: false,
      },
      400: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      800: {
        slidesPerView: products.length < 2 ? products.length : 2,
        slidesPerGroup: products.length < 2 ? products.length : 2,
      },
      1200: {
        slidesPerView: products.length < 3 ? products.length : 3,
        slidesPerGroup: products.length < 3 ? products.length : 3,
      },
    },
  }

  if (products.length === 1) {
    return (
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CardProduct card={products[0]} />
      </Stack>
    )
  }

  return (
    <SliderCarousel settings={settings}>
      {products.map((product) => {
        return (
          <Slide key={product.id}>
            <CardProduct card={product} />
          </Slide>
        )
      })}
    </SliderCarousel>
  )
}

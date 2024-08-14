import { FC, memo } from "react";
import { Stack } from "@mui/material";
import {
  CardProduct,
  Slide,
  SliderCarousel,
  SliderProps,
} from "@/presenter/components/ui";
import { ProductModel } from "@/domain/models";

interface ProductCarouselProps {
  product: ProductModel[];
}

const ProductCarousel: FC<ProductCarouselProps> = ({ product }) => {
  const loadProd = [...product, ...product, ...product, ...product, ...product];

  const settings: SliderProps = {
    spaceBetween: 10,
    slidesPerView: product.length <= 9 ? product.length : 3,
    centeredSlides: true,
    grabCursor: true,
    draggable: product.length >= 3,
    loop: product.length >= 3,
    pagination: product.length >= 3 && {
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
        slidesPerView: product.length < 2 ? product.length : 2,
        slidesPerGroup: product.length < 2 ? product.length : 2,
      },
      1200: {
        slidesPerView: product.length < 3 ? product.length : 3,
        slidesPerGroup: product.length < 3 ? product.length : 3,
      },
    },
  };

  if (product.length === 1) {
    return (
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardProduct card={product[0]} />
      </Stack>
    );
  }

  return (
    <SliderCarousel settings={settings}>
      {loadProd.map((card, index) => (
        <Slide key={index}>
          <CardProduct card={card} />
        </Slide>
      ))}
    </SliderCarousel>
  );
};

export default memo(ProductCarousel);

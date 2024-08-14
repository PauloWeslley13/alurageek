import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import {
  A11y,
  Autoplay,
  EffectCards,
  EffectCreative,
  EffectFade,
  FreeMode,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export function SliderCarousel({ settings, children }: SliderProps) {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        A11y,
        Autoplay,
        FreeMode,
        EffectFade,
        EffectCards,
        EffectCreative,
        Keyboard,
      ]}
      {...settings}
    >
      {children}
    </Swiper>
  );
}

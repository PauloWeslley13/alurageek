import { FONTS } from "@/presenter/styles";

export type FontProps = typeof FONTS.fontWeight &
  typeof FONTS.fontSize &
  typeof FONTS.fontFamily;

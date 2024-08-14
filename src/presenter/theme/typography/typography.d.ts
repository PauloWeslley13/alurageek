import "@mui/material/styles/createTypography";
import { FontProps, FONTS } from "@/presenter/styles";

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    font: FontProps;
    text: typeof FONTS.text;
    lineHeight: typeof FONTS.lineHeight;
    letterSpacing: typeof FONTS.letterSpacing;
  }

  interface TypographyOptions {
    font: FontProps;
    text: typeof FONTS.text;
    lineHeight: typeof FONTS.lineHeight;
    letterSpacing: typeof FONTS.letterSpacing;
  }
}

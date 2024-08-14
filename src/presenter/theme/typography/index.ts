import { TypographyOptions } from "@mui/material/styles/createTypography";
import { FONTS } from "@/presenter/styles";

type TypographyProps = { fontFamily: string };

export const Typography = ({
  fontFamily,
}: TypographyProps): TypographyOptions => ({
  htmlFontSize: 16,
  fontFamily,
  letterSpacing: { ...FONTS.letterSpacing },
  lineHeight: { ...FONTS.lineHeight },
  font: {
    ...FONTS.fontFamily,
    ...FONTS.fontSize,
    ...FONTS.fontWeight,
  },
  text: {
    ...FONTS.text,
  },
  h1: {
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: "2.375rem",
    lineHeight: 1.21,
  },
  h2: {
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: "1.875rem",
    lineHeight: 1.27,
  },
  h3: {
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: "1.5rem",
    lineHeight: 1.33,
  },
  h4: {
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: "1.25rem",
    lineHeight: 1.4,
  },
  h5: {
    fontWeight: FONTS.fontWeight.semibold,
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  h6: {
    fontWeight: FONTS.fontWeight.regular,
    fontSize: "0.875rem",
    lineHeight: 1.57,
  },
  caption: {
    fontWeight: FONTS.fontWeight.regular,
    fontSize: "0.75rem",
    lineHeight: 1.66,
  },
  body1: {
    fontSize: "0.875rem",
    lineHeight: 1.57,
  },
  body2: {
    fontSize: "0.75rem",
    lineHeight: 1.66,
  },
  subtitle1: {
    fontSize: "0.875rem",
    fontWeight: FONTS.fontWeight.semibold,
    lineHeight: 1.57,
  },
  subtitle2: {
    fontSize: "0.75rem",
    fontWeight: 500,
    lineHeight: 1.66,
  },
  overline: {
    lineHeight: 1.66,
  },
  button: {
    fontFamily: FONTS.fontFamily.OPEN_SANS,
    textTransform: "capitalize",
  },
});

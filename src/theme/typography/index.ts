import { TypographyOptions } from '@mui/material/styles/createTypography'
import { STYLES } from '@/styles'

type TypographyProps = { fontFamily: string }

export const Typography = ({
  fontFamily,
}: TypographyProps): TypographyOptions => ({
  fontFamily,
  fontWeightLight: STYLES.FONTS.fontWeight.light,
  fontWeightRegular: STYLES.FONTS.fontWeight.regular,
  fontWeightMedium: STYLES.FONTS.fontWeight.medium,
  fontWeightBold: STYLES.FONTS.fontWeight.semibold,
  h1: {
    fontWeight: STYLES.FONTS.fontWeight.semibold,
    fontSize: STYLES.FONTS.fontSizes['4xl'],
    lineHeight: 1.21,
  },
  h2: {
    fontWeight: STYLES.FONTS.fontWeight.semibold,
    fontSize: STYLES.FONTS.fontSizes['3xl'],
    lineHeight: 1.27,
  },
  h3: {
    fontWeight: STYLES.FONTS.fontWeight.semibold,
    fontSize: STYLES.FONTS.fontSizes['2xl'],
    lineHeight: 1.33,
  },
  h4: {
    fontWeight: STYLES.FONTS.fontWeight.semibold,
    fontSize: STYLES.FONTS.fontSizes.md,
    lineHeight: 1.4,
  },
  h5: {
    fontWeight: STYLES.FONTS.fontWeight.semibold,
    fontSize: STYLES.FONTS.fontSizes.sm,
    lineHeight: 1.5,
  },
  h6: {
    fontWeight: STYLES.FONTS.fontWeight.regular,
    fontSize: STYLES.FONTS.fontSizes.xs,
    lineHeight: 1.57,
  },
  caption: {
    fontWeight: STYLES.FONTS.fontWeight.regular,
    fontSize: STYLES.FONTS.fontSizes.xs,
    lineHeight: 1.66,
  },
  body1: {
    fontSize: STYLES.FONTS.fontSizes.sm,
    lineHeight: 1.57,
  },
  body2: {
    fontSize: STYLES.FONTS.fontSizes.xs,
    lineHeight: 1.66,
  },
  subtitle1: {
    fontSize: STYLES.FONTS.fontSizes.sm,
    fontWeight: STYLES.FONTS.fontWeight.semibold,
    lineHeight: 1.57,
  },
  subtitle2: {
    fontSize: STYLES.FONTS.fontSizes.xs,
    fontWeight: STYLES.FONTS.fontWeight.regular,
    lineHeight: 1.66,
  },
  overline: {
    lineHeight: 1.66,
  },
  button: {
    textTransform: 'capitalize',
  },
})

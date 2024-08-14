import { LineHeight } from "./line-height-type";

export default {
  3: {
    lineHeight: ".75rem", // 12px
  } satisfies LineHeight.LineHeight3,
  4: {
    lineHeight: "1rem", // 16px
  } satisfies LineHeight.LineHeight4,
  5: {
    lineHeight: "1.25rem", // 20px
  } satisfies LineHeight.LineHeight5,
  6: {
    lineHeight: "1.5rem", // 24px
  } satisfies LineHeight.LineHeight6,
  7: {
    lineHeight: "1.75rem", // 28px
  } satisfies LineHeight.LineHeight7,
  8: {
    lineHeight: "2rem", // 32px
  } satisfies LineHeight.LineHeight8,
  9: {
    lineHeight: "2.25rem", // 36px
  } satisfies LineHeight.LineHeight9,
  10: {
    lineHeight: "2.5rem", // 40px
  } satisfies LineHeight.LineHeight10,
  none: {
    lineHeight: "1", // 1
  } satisfies LineHeight.LineHeightNone,
  tight: {
    lineHeight: "1.25", // 1.25
  } satisfies LineHeight.LineHeightTight,
  snug: {
    lineHeight: "1.375", // 1.375
  } satisfies LineHeight.LineHeightSnug,
  normal: {
    lineHeight: "1.5", // 1.5
  } satisfies LineHeight.LineHeightNormal,
  relaxed: {
    lineHeight: "1.625", // 1.625
  } satisfies LineHeight.LineHeightRelaxed,
  loose: {
    lineHeight: "2", // 2
  } satisfies LineHeight.LineHeightLoose,
};

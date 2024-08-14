import { Text } from "./text-type";

export default {
  xs: {
    fontSize: "0.75rem", // 12px
    lineHeight: "1rem", // 16px
  } satisfies Text.SizeXsType,
  sm: {
    fontSize: "0.875rem", // 14px
    lineHeight: "1.25rem", // 20px
  } satisfies Text.SizeSmType,
  base: {
    fontSize: "1rem", // 16px
    lineHeight: "1.5rem", // 24px
  } satisfies Text.SizeBaseType,
  lg: {
    fontSize: "1.125rem", // 18px
    lineHeight: "1.75rem", // 28px
  } satisfies Text.SizeLgType,
  xl: {
    fontSize: "1.25rem", // 20px
    lineHeight: "1.75rem", // 28px
  } satisfies Text.SizeXlType,
  "2xl": {
    fontSize: "1.5rem", // 24px
    lineHeight: "2rem", // 32px
  } satisfies Text.Size2xlType,
  "3xl": {
    fontSize: "1.875rem", // 30px
    lineHeight: "2.25rem", // 36px
  } satisfies Text.Size3xlType,
  "4xl": {
    fontSize: "2.25rem", // 36px
    lineHeight: "2.5rem", // 40px
  } satisfies Text.Size4xlType,
  "5xl": {
    fontSize: "3rem", // 48px
    lineHeight: "1", // 1
  } satisfies Text.Size5xlType,
  "6xl": {
    fontSize: "3.75rem", // 60px
    lineHeight: "1", // 1
  } satisfies Text.Size6xlType,
  "7xl": {
    fontSize: "4.5rem", // 72px
    lineHeight: "1", // 1
  } satisfies Text.Size7xlType,
  "8xl": {
    fontSize: "6rem", // 96px
    lineHeight: "1", // 1
  } satisfies Text.Size8xlType,
  "9xl": {
    fontSize: "8rem", // 128px
    lineHeight: "1", // 1
  } satisfies Text.Size9xlType,
};

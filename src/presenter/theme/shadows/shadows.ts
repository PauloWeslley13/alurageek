import { alpha } from "@mui/material/styles";
import { COLORS } from "@/presenter/styles";

export const CustomShadows = () => ({
  button: `0 2px #0000000b`,
  text: `0 -1px 0 rgb(0 0 0 / 12%)`,
  z1: `0px 2px 8px ${alpha(COLORS.zinc[900], 0.15)}`,
});

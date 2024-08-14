import "@mui/material/styles";
import { SIZES } from "@/presenter/styles";

declare module "@mui/material/styles" {
  interface Theme {
    sizes: typeof SIZES;
  }
  interface ThemeOptions {
    sizes: typeof SIZES;
    customShadows: {
      button: string;
      text: string;
      z1: string;
    };
  }
}

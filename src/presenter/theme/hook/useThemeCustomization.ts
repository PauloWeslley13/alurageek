import { useMemo } from "react";
import { ThemeOptions } from "@mui/material";
import { FONTS, SIZES } from "@/presenter/styles";
import { useAppSelector } from "@/main/store/hook/useRedux";
import { Palette } from "@/presenter/theme/palette";
import { Typography } from "@/presenter/theme/typography";
import { CustomShadows } from "@/presenter/theme/shadows/shadows";

function useThemeCustomization() {
  const { theme } = useAppSelector((state) => state.theme);
  const themePalette = Palette({ theme: theme === "dark" ? "dark" : "light" });
  const themeTypography = Typography({
    fontFamily: FONTS.fontFamily.RALEWAY,
  });
  const themeCustomShadows = CustomShadows();

  const themeOptions: ThemeOptions = useMemo(() => {
    return {
      spacing: (pixels: number) => `${0.25 * pixels}rem`,
      typography: themeTypography,
      palette: themePalette,
      sizes: SIZES,
      customShadows: themeCustomShadows,
    };
  }, [themeTypography, themePalette, themeCustomShadows]);

  return { themeOptions };
}

export { useThemeCustomization };

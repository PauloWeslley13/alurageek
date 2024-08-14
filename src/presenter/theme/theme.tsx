import { ReactNode } from "react";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { ComponentOverrides } from "./overrides";
import { Global } from "./global-styles";
import { useThemeCustomization } from "./hook/useThemeCustomization";

export const ThemeCustomization = ({ children }: { children: ReactNode }) => {
  const { themeOptions } = useThemeCustomization();
  let themes = createTheme(themeOptions);
  themes.components = ComponentOverrides(themes);
  themes = responsiveFontSizes(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <GlobalStyles styles={Global(themes)} />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    default: true;
    primary: true;
    secondary: true;
  }
}

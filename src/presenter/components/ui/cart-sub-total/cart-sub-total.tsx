import { alpha, styled } from "@mui/material";

export const CartSubTotal = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  border: `1px solid ${theme.palette.grey[300]}`,
  background:
    theme.palette.mode === "light"
      ? alpha(theme.palette.secondary.light, 0.5)
      : theme.palette.secondary.dark,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1.9),
}));

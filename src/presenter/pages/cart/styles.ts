import { alpha, styled, Theme } from "@mui/material";

const mixins = (theme: Theme) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  background:
    theme.palette.mode === "light"
      ? alpha(theme.palette.secondary.light, 0.5)
      : theme.palette.secondary.dark,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1.9),
});

export const CartWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 414px",
  gridTemplateRows: "auto",
  columnGap: theme.spacing(3.75),
  minHeight: 650,
  padding: theme.spacing(5.5),
}));

export const CartItemProduct = styled("div")(({ theme }) => ({
  width: "100%",
  ...mixins(theme),
}));

export const CartItemHeaderProduct = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  paddingBlock: theme.spacing(1),
}));

export const CartItemInfo = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const CartItemPrice = styled("div")(({ theme }) => ({
  ...mixins(theme),
}));

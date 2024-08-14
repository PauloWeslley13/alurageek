import { styled } from "@mui/material";

export const ProductContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  columnGap: theme.spacing(9),
  padding: theme.spacing(22),

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    padding: theme.spacing(5, 8),
  },

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },

  "& img": {
    width: theme.spacing(156.5),
    height: theme.spacing(140.5),
    objectFit: "cover",
    borderRadius: theme.shape.borderRadius,

    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: "auto",
    },

    [theme.breakpoints.up("xs")]: {
      width: "100%",
      height: "auto",
    },
  },
}));

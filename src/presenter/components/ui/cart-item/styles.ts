import { styled } from "@mui/material";

export const StyledCartItemContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(3),
  width: theme.spacing(130),

  "& > div": {
    "& img": {
      width: theme.spacing(23),
      height: theme.spacing(23),
      borderRadius: theme.spacing(4),
      objectFit: "cover",
    },
  },
}));

export const StyledCartItemBody = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: theme.spacing(80),
}));

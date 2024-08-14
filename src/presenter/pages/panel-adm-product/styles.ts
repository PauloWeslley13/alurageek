import { styled } from "@mui/material";

export const StyledContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(1, 1fr)",
  gridGap: theme.spacing(4),
  paddingTop: theme.spacing(8),

  "& > form": {
    placeSelf: "center",
    gridColumn: "span 1",
    width: "100%",
    paddingBlock: theme.spacing(2),
    paddingInline: theme.spacing(12.5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(3),

    "& .MuiTextField-root": {
      width: "100%",
    },
  },
}));

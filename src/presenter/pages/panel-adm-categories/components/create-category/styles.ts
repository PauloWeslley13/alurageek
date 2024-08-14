import { styled } from "@mui/material";

export const FormCategoryContainer = styled("div")(({ theme }) => ({
  width: "100%",

  "& > form": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(5),
  },
}));

import { Drawer, styled } from "@mui/material";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    background: theme.palette.background.default,
    borderTopLeftRadius: theme.spacing(3),
    borderBottomLeftRadius: theme.spacing(3),
  },
}));

import { styled } from "@mui/material";
import MuiDialog, { DialogProps as MuiDialogProps } from "@mui/material/Dialog";
import MuiDialogTitle, {
  DialogTitleProps as MuiDialogTitleProps,
} from "@mui/material/DialogTitle";

export const StyledDialogRoot = styled(MuiDialog)<MuiDialogProps>(
  ({ theme }) => ({
    "& .MuiPaper-root": {
      background: theme.palette.background.default,
      borderRadius: theme.spacing(3),
      padding: theme.spacing(2),
    },
  }),
);

export const StyledDialogHeader = styled(MuiDialogTitle)<MuiDialogTitleProps>(
  ({ theme }) => ({
    background: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
);

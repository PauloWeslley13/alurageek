import MuiDialogContent, {
  DialogContentProps as MuiDialogContentProps,
} from "@mui/material/DialogContent";

const DialogContent = ({ sx, ...rest }: MuiDialogContentProps) => (
  <MuiDialogContent
    {...rest}
    sx={{ ...sx, bgcolor: (theme) => theme.palette.background.default }}
  />
);

export default DialogContent;

import { ComponentProps, FC } from "react";
import Typography from "@mui/material/Typography";
import MuiAlert from "@mui/material/Alert";

type AlertType = ComponentProps<typeof MuiAlert> & {
  message: string;
};

export const Alert: FC<AlertType> = ({ message = "", ...rest }) => (
  <MuiAlert {...rest} variant="filled" severity="error">
    <Typography component="span" variant="h5">
      {message}
    </Typography>
  </MuiAlert>
);

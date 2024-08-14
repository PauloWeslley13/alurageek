import { ComponentProps } from "react";
import DialogContentText from "@mui/material/DialogContentText";

type DialogDescriptionProps = ComponentProps<typeof DialogContentText> & {
  description: string;
};

const DialogDescription = ({
  description = "",
  ...rest
}: DialogDescriptionProps) => (
  <DialogContentText
    {...rest}
    id="alert-dialog-description"
    color="gray"
    variant="h5"
  >
    {description}
  </DialogContentText>
);

export default DialogDescription;

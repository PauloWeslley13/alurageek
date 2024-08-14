import { ComponentProps, ReactNode } from "react";
import Typography from "@mui/material/Typography";
import { StyledDialogHeader } from "./styles";

type DialogHeaderProps = ComponentProps<typeof StyledDialogHeader> & {
  title?: string;
  children?: ReactNode;
};

const DialogHeader = ({ title = "", children, ...rest }: DialogHeaderProps) => (
  <StyledDialogHeader {...rest}>
    {title && (
      <Typography
        component="span"
        variant="h4"
        sx={{
          fontSize: (theme) => theme.typography.font.lg,
          fontWeight: (theme) => theme.typography.font.bold,
          color: "primary.main",
          textTransform: "capitalize",
        }}
      >
        {title}
      </Typography>
    )}

    {children && children}
  </StyledDialogHeader>
);

export default DialogHeader;

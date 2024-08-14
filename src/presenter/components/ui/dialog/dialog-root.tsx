import { ComponentProps, ReactNode } from "react";
import { StyledDialogRoot } from "./styles";

type DialogRootProps = ComponentProps<typeof StyledDialogRoot> & {
  children: ReactNode;
};

const DialogRoot = ({ children, ...rest }: DialogRootProps) => (
  <StyledDialogRoot {...rest}>{children}</StyledDialogRoot>
);

export default DialogRoot;

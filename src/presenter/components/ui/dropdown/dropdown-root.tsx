import { ReactNode } from "react";
import { Dropdown, DropdownProps } from "@mui/base/Dropdown";

type DropdownRootProps = DropdownProps & {
  children: ReactNode;
};

const DropdownRoot = ({ ...rest }: DropdownRootProps) => <Dropdown {...rest} />;

export default DropdownRoot;

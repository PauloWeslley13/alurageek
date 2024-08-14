import { ReactNode } from "react";
import Backdrop from "@mui/material/Backdrop";

type LoaderRootProps = {
  children: ReactNode;
};

const LoaderRoot = ({ children }: LoaderRootProps) => (
  <Backdrop
    open={true}
    sx={{
      color: (theme) => theme.palette.common.white,
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
  >
    {children}
  </Backdrop>
);

export default LoaderRoot;

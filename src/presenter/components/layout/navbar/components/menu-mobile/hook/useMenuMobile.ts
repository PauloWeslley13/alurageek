import { useState } from "react";

const useMenuMobile = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return { toggleDrawer, open };
};

export { useMenuMobile };

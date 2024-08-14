import { useState } from "react";

export function useCartSideBar() {
  const [isCartSideBarOpen, setIsCartSideBarOpen] = useState(false);

  function handlerToggleDrawer(newOpen: boolean) {
    setIsCartSideBarOpen(newOpen);
  }

  return { handlerToggleDrawer, isCartSideBarOpen };
}

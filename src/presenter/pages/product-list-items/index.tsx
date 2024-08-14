import { lazy } from "react";
import { Loadable } from "@/presenter/components/loadable";

export const ProductListItems = Loadable(
  lazy(() => import("@/presenter/pages/product-list-items/product-list-items")),
);

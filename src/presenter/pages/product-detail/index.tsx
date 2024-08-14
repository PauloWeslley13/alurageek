import { lazy } from "react";
import { Loadable } from "@/presenter/components/loadable";

export const ProductDetail = Loadable(
  lazy(() => import("@/presenter/pages/product-detail/product-detail")),
);

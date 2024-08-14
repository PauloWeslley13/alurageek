import { lazy } from "react";
import { Loadable } from "@/presenter/components/loadable";

export const Category = Loadable(
  lazy(() => import("@/presenter/pages/category/category")),
);

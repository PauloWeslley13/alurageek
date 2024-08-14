import { lazy } from "react";
import { Loadable } from "@/presenter/components/loadable";

export const PanelAdmProduct = Loadable(
  lazy(() => import("@/presenter/pages/panel-adm-product/panel-adm-product")),
);

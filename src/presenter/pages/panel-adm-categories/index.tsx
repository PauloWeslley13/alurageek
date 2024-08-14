import { lazy } from "react";
import { Loadable } from "@/presenter/components/loadable";

export const PanelAdmCategory = Loadable(
  lazy(
    () => import("@/presenter/pages/panel-adm-categories/panel-adm-categories"),
  ),
);

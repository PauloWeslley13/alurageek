import { lazy } from "react";
import { Loadable } from "@/presenter/components/loadable";

export const PanelAdmLayout = Loadable(
  lazy(() => import("@/presenter/layout/panel-adm-layout/panel-adm-layout")),
);

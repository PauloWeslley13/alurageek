import { lazy } from "react";
import { Loadable } from "@/presenter/components/loadable";

export const Authentication = Loadable(
  lazy(() => import("@/presenter/pages/authentication/authentication")),
);

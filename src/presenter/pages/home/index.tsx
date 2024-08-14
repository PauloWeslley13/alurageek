import { lazy } from "react";
import { Loadable } from "@/presenter/components/loadable";

export const Home = Loadable(lazy(() => import("@/presenter/pages/home/home")));

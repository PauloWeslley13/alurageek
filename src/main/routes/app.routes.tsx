import { RouteObject } from "react-router-dom";
import { PanelAdmLayout, RootLayout } from "@/presenter/layout";
import * as Page from "@/presenter/pages";

export const appRoutes = (): RouteObject => ({
  path: "/",
  element: <RootLayout />,
  children: [
    { path: "home", element: <Page.Home /> },
    { path: "auth", element: <Page.Authentication /> },
    { path: "cart", element: <Page.Cart /> },
    { path: "product-list", element: <Page.ProductListItems /> },
    { path: "product-detail/:productId", element: <Page.ProductDetail /> },
    {
      path: "panel-adm",
      element: <PanelAdmLayout />,
      children: [
        { path: "products", element: <Page.PanelAdmProduct /> },
        { path: "categories", element: <Page.PanelAdmCategory /> },
      ],
    },
    { path: "*", element: <div>NotFound</div> },
  ],
});

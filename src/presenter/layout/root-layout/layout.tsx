import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Footer, NavBar } from "@/presenter/components/layout";

export const RootLayout: FC = () => {
  const { pathname } = useLocation();

  if (pathname === "/") return <Navigate to="/home" />;

  return (
    <>
      <NavBar />

      <Outlet />

      <Footer.Root>
        <Footer.Content />
        <Footer.Bar />
      </Footer.Root>
    </>
  );
};

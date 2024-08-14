import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/main/store/hook/useRedux";

export function useNav() {
  const { user } = useAppSelector((state) => state.authentication);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const hasUserAuthentication = !!user?.accessToken;
  const hasPathOrLogged = pathname === "/auth" || hasUserAuthentication;

  function handlerNavAuth() {
    navigate("/auth");
  }

  function handlerNavCart() {
    navigate("/cart");
  }

  return {
    hasUserAuthentication,
    hasPathOrLogged,
    handlerNavAuth,
    handlerNavCart,
  };
}

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/main/store/hook/useRedux";
import { logout } from "@/main/store/ducks/auth";
import { makeRemoteDatabaseAuthSignOut } from "@/main/factories/data";

export function useMenuProfile() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handlerNavPainel() {
    navigate("/panel-adm");
  }

  async function handlerLogout() {
    const auth = makeRemoteDatabaseAuthSignOut();
    await auth.signOut();
    dispatch(logout());
  }

  return { handlerNavPainel, handlerLogout };
}

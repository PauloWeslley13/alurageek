import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/main/store/hook/useRedux";
import { loadUser } from "@/main/store/ducks/user";
import { loadTheme } from "@/main/store/ducks/theme";
import { loadProduct } from "@/main/store/ducks/products";
import { makeRemoteDatabaseAuth } from "@/main/factories/data";

export function useApp() {
  const { theme } = useAppSelector((state) => state.theme);
  const auth = makeRemoteDatabaseAuth();
  const dispatch = useAppDispatch();

  const loadUserAuthentication = useCallback(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        dispatch(loadUser({ userId }));
      }
    });
  }, [dispatch, auth]);

  useEffect(() => {
    dispatch(loadTheme());
    dispatch(loadProduct());
    loadUserAuthentication();
  }, [dispatch, loadUserAuthentication]);

  const loadThemeToastify = theme === "light" ? "dark" : "colored";

  return { loadThemeToastify };
}

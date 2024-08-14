import { useCallback } from "react";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";
import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";
import { useAppDispatch } from "@/main/store/hook/useRedux";
import { setTheme } from "@/main/store/ducks/theme";

function useMenuTheme() {
  const dispatch = useAppDispatch();

  const handleChangeTheme = useCallback(
    (params: string) => {
      dispatch(setTheme(params === "light" ? "light" : "dark"));
    },
    [dispatch],
  );

  const menuTheme = [
    { label: "Dark", value: "dark", icon: Brightness4RoundedIcon },
    { label: "Light", value: "light", icon: Brightness7RoundedIcon },
  ];

  return { handleChangeTheme, menuTheme };
}

export { useMenuTheme };

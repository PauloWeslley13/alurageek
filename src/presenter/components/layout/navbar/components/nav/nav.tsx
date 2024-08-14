import { FC } from "react";
import { Button, Stack, useMediaQuery } from "@mui/material";
import { CartSideBar } from "@/presenter/components/ui";
import {
  MenuMobile,
  MenuProfile,
  MenuTheme,
} from "@/presenter/components/layout/navbar/components";
import { useNav } from "./hook";

const Nav: FC = () => {
  const { hasPathOrLogged, hasUserAuthentication, handlerNavAuth } = useNav();
  const hasMaxScreen = useMediaQuery("(max-width:899px)");

  return (
    <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 2.2 }}>
      {!hasMaxScreen && (
        <>
          {!hasPathOrLogged && (
            <Button
              variant="default"
              onClick={handlerNavAuth}
              sx={{
                height: (theme) => theme.spacing(8.995),
                width: (theme) => theme.spacing(20),
              }}
            >
              Login
            </Button>
          )}

          {hasUserAuthentication && <CartSideBar />}

          <MenuTheme />

          {hasUserAuthentication && <MenuProfile />}
        </>
      )}

      <MenuMobile />
    </Stack>
  );
};

export { Nav };

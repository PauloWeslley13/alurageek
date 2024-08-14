import { FC } from "react";
import { styled } from "@mui/system";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { CardUser, Dropdown } from "@/presenter/components/ui";
import { useMenuProfile } from "./hook";

const DropdownButton = styled(BaseMenuButton)`
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const MenuProfile: FC = () => {
  const { handlerNavPainel, handlerLogout } = useMenuProfile();

  return (
    <Dropdown.Root>
      <DropdownButton>
        <CardUser />
      </DropdownButton>
      <Dropdown.List>
        <Dropdown.Item onClick={handlerNavPainel}>
          <DashboardRoundedIcon />
          Panel Adm
        </Dropdown.Item>
        <Dropdown.Item onClick={handlerLogout}>
          <LogoutRoundedIcon />
          Logout
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown.Root>
  );
};

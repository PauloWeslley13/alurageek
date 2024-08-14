import { FC } from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";
import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";
import Button from "@mui/material/Button";
import { useMenuMobile } from "./hook/useMenuMobile";

const MenuMobile: FC<DrawerProps> = ({ ...rest }) => {
  const { open, toggleDrawer } = useMenuMobile();

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        color="primary"
        sx={{ display: { sm: "block", md: "none" } }}
      >
        <MenuRoundedIcon />
      </IconButton>

      <Drawer
        {...rest}
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          ".MuiPaper-root": {
            width: 300,
            "> header": { p: 5 },
          },
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            p: 2,
          }}
        >
          <Button
            startIcon={<Brightness7RoundedIcon />}
            variant="contained"
            aria-label="theme"
          >
            Light
          </Button>
          <Button
            startIcon={<Brightness4RoundedIcon />}
            variant="contained"
            aria-label="theme"
          >
            Dark
          </Button>
        </Stack>

        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton color="primary">
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export { MenuMobile };

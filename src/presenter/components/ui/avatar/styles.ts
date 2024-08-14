import { styled } from "@mui/material";
import MuiBadge, { BadgeProps as MuiBadgeProps } from "@mui/material/Badge";
import MuiAvatar, { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";
import { green } from "@mui/material/colors";

export const StyledAvatar = styled(MuiAvatar)<MuiAvatarProps>(({ theme }) => ({
  background: theme.palette.secondary.light,
  border: `2px solid ${theme.palette.primary.contrastText}`,
}));

export const StyledBadge = styled(MuiBadge)<MuiBadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: green[500],
    color: green[300],
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

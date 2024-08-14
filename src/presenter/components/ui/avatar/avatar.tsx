import { ComponentProps } from "react";
import MuiAvatar from "@mui/material/Avatar";
import * as S from "./styles";

type AvatarProps = ComponentProps<typeof MuiAvatar> & {
  user: string;
};

export const Avatar = ({ user, ...rest }: AvatarProps) => (
  <S.StyledBadge
    overlap="circular"
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    variant="dot"
  >
    <S.StyledAvatar {...rest} alt={user} />
  </S.StyledBadge>
);

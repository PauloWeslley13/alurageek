import { ComponentProps, FC, ReactNode } from "react";
import * as S from "./styles";

type ShoppingBadgeProps = ComponentProps<typeof S.Badge> & {
  children: ReactNode;
};

export const ShoppingBadge: FC<ShoppingBadgeProps> = ({
  children,
  ...rest
}) => (
  <S.Badge {...rest}>
    <S.ButtonBadge>{children}</S.ButtonBadge>
  </S.Badge>
);

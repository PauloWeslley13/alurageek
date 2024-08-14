import { ComponentProps, FC, ReactNode } from "react";
import { StyledCartItemContent } from "./styles";

type CartItemContentProps = ComponentProps<typeof StyledCartItemContent> & {
  imageURL: string;
  children?: ReactNode;
};

const CartItemContent: FC<CartItemContentProps> = ({
  imageURL = "",
  children,
  ...props
}) => (
  <StyledCartItemContent {...props}>
    <div>
      <img src={imageURL} alt="Foto do Produto" />
    </div>

    {children && children}
  </StyledCartItemContent>
);

export default CartItemContent;

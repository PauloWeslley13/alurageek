import { FC } from "react";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart } from "@/presenter/pages/cart/hook";
import { CartItem } from "@/presenter/components/ui";
import { CartProductProps } from "@/presenter/components/types";
import { useFormatted } from "@/presenter/hooks/useFormatted";

type CartItemProps = {
  cartItem: CartProductProps;
};

export const ShopCartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { id, quantity, description, name, photoUrl, price } = cartItem;
  const { formatted } = useFormatted();
  const { incrementQuantity, decrementQuantity, handleDeleteItemCart } =
    useCart();

  return (
    <CartItem.Root>
      <CartItem.Content photoUrl={photoUrl}>
        <CartItem.Body
          name={name}
          price={formatted.priceMask(price)}
          description={description}
        />
      </CartItem.Content>

      <CartItem.Actions
        quantity={quantity}
        incrementQuantity={() => incrementQuantity(id)}
        decrementQuantity={() => decrementQuantity(id, quantity)}
      />

      <IconButton color="error" onClick={() => handleDeleteItemCart(id)}>
        <DeleteOutlineIcon />
      </IconButton>
    </CartItem.Root>
  );
};

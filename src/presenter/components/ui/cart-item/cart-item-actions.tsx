import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

type CartItemActionsProps = {
  quantity: number;
  decrementQuantity: () => void;
  incrementQuantity: () => void;
};

const CartItemActions: FC<CartItemActionsProps> = ({
  quantity = 0,
  incrementQuantity,
  decrementQuantity,
}) => (
  <Stack sx={{ flexDirection: "column", alignItems: "center" }}>
    <Typography
      variant="subtitle2"
      sx={{ fontWeight: (theme) => theme.typography.font.semibold }}
    >
      Quantidade
    </Typography>

    <Stack sx={{ flexDirection: "row", gap: 2 }}>
      <RemoveCircleOutlineIcon
        sx={{ cursor: "pointer" }}
        onClick={decrementQuantity}
      />

      <Typography
        sx={{ fontWeight: (theme) => theme.typography.font.semibold }}
      >
        {quantity}
      </Typography>

      <AddCircleOutlineIcon
        sx={{ cursor: "pointer" }}
        onClick={incrementQuantity}
      />
    </Stack>
  </Stack>
);

export default CartItemActions;

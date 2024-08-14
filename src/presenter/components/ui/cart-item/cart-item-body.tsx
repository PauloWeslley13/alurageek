import { ComponentProps, FC } from "react";
import { Typography } from "@mui/material";
import { StyledCartItemBody } from "./styles";

type CartItemBodyProps = ComponentProps<typeof StyledCartItemBody> & {
  name: string;
  description?: string;
  price: string;
};

const CartItemBody: FC<CartItemBodyProps> = ({
  name = "",
  description = "",
  price = "",
  ...props
}) => (
  <StyledCartItemBody {...props}>
    <div>
      <Typography
        component="h3"
        variant="h3"
        sx={{
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          textTransform: "capitalize",
        }}
      >
        {name}
      </Typography>

      {description && (
        <Typography component="p" variant="body1">
          {description}
        </Typography>
      )}
    </div>

    <Typography component="span" variant="h4">
      {price}
    </Typography>
  </StyledCartItemBody>
);

export default CartItemBody;

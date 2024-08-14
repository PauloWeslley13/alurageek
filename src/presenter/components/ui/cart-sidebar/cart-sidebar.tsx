import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useAppSelector } from "@/main/store/hook/useRedux";
import { CartSubTotal, ShoppingBadge } from "@/presenter/components/ui";
import { useCart } from "@/presenter/hooks/useCart";
import { useFormatted } from "@/presenter/hooks/useFormatted";
import { useCartSideBar } from "./hook";
import { StyledDrawer } from "./styles";
import { CartItemSidebar } from "./cart-item-sidebar";

function CartSideBar() {
  const { cart } = useAppSelector((state) => state.cart);
  const { isCartSideBarOpen, handlerToggleDrawer } = useCartSideBar();
  const { loadCartProducts, loadCalcTotal } = useCart();
  const { formatted } = useFormatted();
  const navigate = useNavigate();

  return (
    <>
      <ShoppingBadge
        aria-label="cart"
        badgeContent={cart.length}
        onClick={() => handlerToggleDrawer(true)}
      >
        <ShoppingCartIcon sx={{ width: 24, height: 24 }} />
      </ShoppingBadge>

      <StyledDrawer
        open={isCartSideBarOpen}
        onClose={() => handlerToggleDrawer(false)}
        anchor="right"
      >
        <Box sx={{ width: 425, height: "100%" }} role="presentation">
          <Stack sx={{ width: "100%", p: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: (theme) => theme.typography.font.RALEWAY,
                fontWeight: (theme) => theme.typography.font.semibold,
                textAlign: "center",
              }}
            >
              Meu Carrinho
            </Typography>
          </Stack>

          <Stack
            sx={{
              flexDirection: "column",
              justifyContent: "space-between",
              height: "92%",
            }}
          >
            <List>
              {loadCartProducts.map((item) => (
                <CartItemSidebar key={item.id} cartItem={item} />
              ))}

              <Divider />
            </List>

            <Stack sx={{ justifyContent: "center", gap: 2, m: 2 }}>
              <CartSubTotal>
                <Typography component="span" variant="h3">
                  Total
                </Typography>
                <Typography component="span" variant="subtitle1">
                  {formatted
                    .priceMask(loadCalcTotal)
                    .toString()
                    .padStart(2, "0")}
                </Typography>
              </CartSubTotal>

              {loadCartProducts.length >= 1 && (
                <Button variant="contained" onClick={() => navigate("/cart")}>
                  Checkout
                </Button>
              )}
            </Stack>
          </Stack>
        </Box>
      </StyledDrawer>
    </>
  );
}

export { CartSideBar };

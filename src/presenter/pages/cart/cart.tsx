import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { useCart } from './hook/useCart'
import { ShopCartItem } from './shop-cart-item'
import { CartSubTotal } from '@/presenter/components/ui'
import * as S from './styles'

function Cart() {
  const {
    loadCartProducts,
    totalPrice,
    formatted,
    navigate,
    handleCheckout,
    handleSavedCart,
    openSnackBar,
    handleCloseSnackbar,
  } = useCart()

  return (
    <Container maxWidth="xl">
      <S.CartWrapper>
        <S.CartItemProduct>
          <S.CartItemHeaderProduct>
            <Typography component="h3" variant="h3" sx={{ py: 5 }}>
              Carrinho
            </Typography>

            <Button
              variant="secondary"
              startIcon={<KeyboardArrowLeftIcon />}
              onClick={() => navigate(-1)}
              sx={{ '&.MuiButton-secondary ': { padding: '3px 6px' } }}
            >
              Voltar
            </Button>
          </S.CartItemHeaderProduct>

          <Stack sx={{ gap: 2 }}>
            {loadCartProducts.map((props) => (
              <ShopCartItem key={props.id} cartItem={props} />
            ))}
          </Stack>
        </S.CartItemProduct>

        <S.CartItemInfo>
          <S.CartItemPrice>
            <Typography component="h3" variant="h3">
              Resumo do pedido
            </Typography>

            <Stack
              sx={{
                flexDirection: 'column',
                alignItems: 'center',
                spacing: 2,
                marginTop: 6,
              }}
            >
              {loadCartProducts.map((props) => (
                <Stack
                  key={props.id}
                  flexDirection="row"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Typography
                    component="span"
                    variant="subtitle1"
                    textTransform="capitalize"
                  >
                    {props.name}
                  </Typography>
                  <Typography
                    component="span"
                    variant="h5"
                    textTransform="capitalize"
                  >
                    {formatted.priceMask(props.price)}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </S.CartItemPrice>

          <Button variant="contained" onClick={handleSavedCart}>
            Salvar carrinho
          </Button>

          <CartSubTotal>
            <Typography component="span" variant="h3">
              Total
            </Typography>
            <Typography component="span" variant="subtitle1">
              {formatted.priceMask(totalPrice)}
            </Typography>
          </CartSubTotal>

          <Button variant="contained" onClick={handleCheckout}>
            Checkout
          </Button>
        </S.CartItemInfo>
      </S.CartWrapper>

      <Snackbar
        open={!openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        message="Carrinho finalizado!"
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Cart

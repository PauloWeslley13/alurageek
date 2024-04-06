import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { CartItem } from './components'
import { useCart } from './hook/useCart'
import * as S from './cart-styles'

export const Cart = () => {
  const {
    data,
    theme,
    calcTotal,
    makeFormat,
    navigate,
    handleCheckout,
    handleSavedCart,
  } = useCart()

  return (
    <S.CartWrap>
      <S.CartItemProduct>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={theme.spacing(3)}
          borderBottom={`1px solid ${theme.palette.grey[300]}`}
          px={1}
        >
          <Typography
            component="h3"
            variant="h3"
            py={5}
            color={theme.palette.grey[800]}
          >
            Carrinho
          </Typography>

          <div>
            <Button
              variant="secondary"
              startIcon={<KeyboardArrowLeftIcon />}
              onClick={() => navigate(-1)}
              sx={{ '&.MuiButton-secondary ': { padding: '3px 6px' } }}
            >
              Voltar
            </Button>
          </div>
        </Stack>

        <Stack gap={2}>
          {data.map((props) => (
            <CartItem key={props.id} cartItem={props} />
          ))}
        </Stack>
      </S.CartItemProduct>

      <S.CartItemInfo>
        <Stack sx={{ ...S.mixins(theme) }}>
          <Typography
            component="h3"
            variant="h3"
            color={theme.palette.grey[800]}
          >
            Resumo do pedido
          </Typography>

          <Stack
            flexDirection="column"
            alignItems="center"
            spacing={2}
            marginTop={6}
          >
            {data.map((props) => (
              <Stack
                key={props.id}
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  color={theme.palette.grey[800]}
                  textTransform="capitalize"
                >
                  {props.name}
                </Typography>
                <Typography
                  component="span"
                  variant="h5"
                  textTransform="capitalize"
                  color={theme.palette.grey[800]}
                >
                  {makeFormat.priceMask(String(props.price))}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Button variant="contained" onClick={handleSavedCart}>
          Salvar carrinho
        </Button>

        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          p={theme.spacing(1.9)}
          border={`1px solid ${theme.palette.grey[300]}`}
          borderRadius={theme.spacing(2)}
          sx={{ bgcolor: theme.palette.grey[100] }}
        >
          <Typography
            component="span"
            variant="h3"
            color={theme.palette.grey[800]}
          >
            Total
          </Typography>
          <Typography
            component="span"
            variant="subtitle1"
            color={theme.palette.grey[800]}
          >
            {makeFormat.priceMask(String(calcTotal))}
          </Typography>
        </Stack>

        <Button variant="contained" onClick={handleCheckout}>
          Checkout
        </Button>
      </S.CartItemInfo>
    </S.CartWrap>
  )
}

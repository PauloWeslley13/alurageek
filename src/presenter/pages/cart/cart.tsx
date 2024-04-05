import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { CartItem } from './components'
import { Btn, Button } from '@/presenter/components/ui'
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
          <Typography component="h3" variant="h3" py={5}>
            Carrinho
          </Typography>

          <div>
            <Btn
              label="Voltar"
              startIcon={<KeyboardArrowLeftIcon />}
              onClick={() => navigate(-1)}
              size="small"
              sx={{ py: 0, px: 3, border: 'none' }}
            />
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
          <Typography component="h3" variant="h3">
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
                  color={theme.palette.grey[300]}
                  textTransform="capitalize"
                >
                  {props.name}
                </Typography>
                <Typography
                  component="span"
                  variant="h5"
                  textTransform="capitalize"
                >
                  {makeFormat.priceMask(String(props.price))}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Button label="Salvar carrinho" onClick={handleSavedCart} />

        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          p={theme.spacing(1.9)}
          border={`1px solid ${theme.palette.grey[300]}`}
          borderRadius={theme.spacing(2)}
          sx={{ bgcolor: theme.palette.grey[100] }}
        >
          <Typography component="span" variant="h3">
            Total
          </Typography>
          <Typography component="span" variant="subtitle1">
            {makeFormat.priceMask(String(calcTotal))}
          </Typography>
        </Stack>

        <Button label="Checkout" onClick={handleCheckout} />
      </S.CartItemInfo>
    </S.CartWrap>
  )
}

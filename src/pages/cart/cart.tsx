import { Stack, Typography, useTheme } from '@mui/material'
import { CartItem } from './modules'
import { useCart } from './hook/useCart'
import * as S from './cart-styles'
import { Button } from '@/components/ui'

export const Cart = () => {
  const { carts, data } = useCart()
  const theme = useTheme()

  console.log(carts)

  return (
    <S.CartWrap>
      <S.CartItemProduct>
        <Stack
          sx={{
            borderBottom: `1px solid ${theme.palette.grey[300]}`,
            mb: theme.spacing(3),
          }}
        >
          <Typography component="h3" variant="h3" sx={{ py: 5 }}>
            Carrinho
          </Typography>
        </Stack>

        <Stack gap={2}>
          {data.map((props) => (
            <CartItem key={props.id} cartItem={props} />
          ))}
        </Stack>
      </S.CartItemProduct>

      <S.CartItemInfo>
        <div>
          <Typography>Resumo</Typography>
        </div>

        <div>
          <Typography>Total</Typography>
          <Typography>495</Typography>
        </div>

        <Button label="Checkout" />
      </S.CartItemInfo>
    </S.CartWrap>
  )
}

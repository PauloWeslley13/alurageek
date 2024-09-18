import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toasts } from '@/presenter/components/ui'
import { CartType } from '@/presenter/components/types'
import {
  AddCartProps,
  AddToCartProps,
  QuantityProps,
} from '@/main/store/ducks/cart'

const INITIAL_STATE: CartType = {
  userId: '',
  cart: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<AddToCartProps>) => {
      const existProductCart = state.cart.find(
        (prod) => prod.id === payload.productId,
      )

      const newCartProduct = {
        id: payload.productId,
        quantity: 1,
      }

      const newCart = {
        userId: payload.userId,
        cart: [...state.cart, newCartProduct],
        totalPrice: 0,
      } satisfies AddCartProps

      if (existProductCart) {
        toasts.warn({ title: 'Produto já esta no carinho' })

        const updatedCart = state.cart.map((item) =>
          item.id === payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )

        return {
          userId: payload.userId,
          cart: updatedCart,
          totalPrice: state.totalPrice,
        }
      } else {
        toasts.success({ title: 'Produto adicionado no carinho' })
        return {
          userId: newCart.userId,
          cart: newCart.cart,
          totalPrice: newCart.totalPrice,
        }
      }
    },
    removeToCart: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.cart.findIndex((item) => item.id === payload.id)
      state.cart.splice(index, 1)
    },
    handleQuantity: (state, { payload }: PayloadAction<QuantityProps>) => {
      state.cart.map((itemCart) => {
        if (itemCart.id === payload.id) {
          itemCart.quantity += payload.quantity
        }
        return itemCart
      })
    },
    getCart: (_, { payload }: PayloadAction<CartType>) => {
      return payload
    },
    resetCart: () => INITIAL_STATE,
  },
})

export const { addToCart, removeToCart, handleQuantity, resetCart, getCart } =
  cartSlice.actions

export const cartReducer = cartSlice.reducer

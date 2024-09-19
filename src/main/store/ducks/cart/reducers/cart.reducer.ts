import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartType } from '@/presenter/components/types'
import { AddToCartProps, QuantityProps } from '@/main/store/ducks/cart'

const INITIAL_STATE: CartType = {
  userId: '',
  cart: [],
  totalPrice: 0,
} satisfies CartType as CartType

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<AddToCartProps>) => {
      const hasProductCart = state.cart.find(
        (prod) => prod.id === payload.productId,
      )

      if (hasProductCart) {
        const updatedCart = state.cart.map((item) =>
          item.id === payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )

        return { ...state, userId: payload.userId, cart: updatedCart }
      }

      return {
        userId: payload.userId,
        cart: [...state.cart, { id: payload.productId, quantity: 1 }],
        totalPrice: 0,
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
    calcTotalPrice: (state, { payload }: PayloadAction<number>) => {
      state.totalPrice = payload
    },
    getCart: (_, { payload }: PayloadAction<CartType>) => {
      return payload
    },
    resetCart: () => INITIAL_STATE,
  },
})

export const {
  addToCart,
  calcTotalPrice,
  removeToCart,
  handleQuantity,
  resetCart,
  getCart,
} = cartSlice.actions

export const cartReducer = cartSlice.reducer

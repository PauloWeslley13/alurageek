import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toasts } from '@/components/ui'
import { CartType } from '@/components/types'

type QuantityProps = {
  id: string
  quantity: number
}

type AddToCartProps = {
  userId: string
  productId: string
}

type AddCartProps = Pick<CartType, 'userId' | 'data' | 'totalPrice'>

const INITIAL_STATE: CartType = {
  userId: '',
  data: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<AddToCartProps>) => {
      const existProductCart = state.data.find(
        (prod) => prod.id === payload.productId,
      )

      const newCartProduct = {
        id: payload.productId,
        quantity: 1,
      }

      const newCart = {
        userId: payload.userId,
        data: [...state.data, newCartProduct],
        totalPrice: 0,
      } satisfies AddCartProps

      if (existProductCart) {
        toasts.warn({ title: 'Produto já esta no carinho' })

        const updatedCart = state.data.map((item) =>
          item.id === payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )

        return {
          userId: payload.userId,
          data: updatedCart,
          totalPrice: state.totalPrice,
        }
      } else {
        toasts.success({ title: 'Produto adicionado no carinho' })
        return {
          userId: newCart.userId,
          data: newCart.data,
          totalPrice: newCart.totalPrice,
        }
      }
    },
    removeToCart: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.data.findIndex((item) => item.id === payload.id)
      state.data.splice(index, 1)
    },
    handleQuantity: (state, { payload }: PayloadAction<QuantityProps>) => {
      state.data.map((itemCart) => {
        if (itemCart.id === payload.id) itemCart.quantity += payload.quantity
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

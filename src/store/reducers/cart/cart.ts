import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import { ProductsProps } from '@/components/types/products-props'
import { toasts } from '@/components/ui'
import { CartType } from '@/components/types'
import { db } from '@/config/firebase'

type QuantityProps = {
  id: string
  quantity: number
}

type AddToCartProps = {
  userId: string
  productId: string
}

type CartStateProps = Pick<CartType, 'data' | 'totalPrice'>
type AddCartProps = Pick<CartType, 'userId' | 'data' | 'totalPrice'>

const INITIAL_STATE: CartStateProps = {
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

      const newCart: AddCartProps = {
        userId: payload.userId,
        data: [...state.data, newCartProduct],
        totalPrice: 0,
      }

      const updatedCart = state.data.map((item) =>
        item.id === payload.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )

      const addProductToCart = async () => {
        const cartRef = doc(db, 'carts', payload.userId)

        if (state.data.length === 0) {
          console.log('create')
          await setDoc(cartRef, newCart)
        } else {
          console.log('update')
          await updateDoc(cartRef, { data: updatedCart })
        }
      }

      if (existProductCart) {
        toasts.warn({ title: 'Produto já esta no carinho' })

        return {
          userId: payload.userId,
          data: updatedCart,
          totalPrice: state.totalPrice,
        }
      } else {
        state = newCart
        addProductToCart()
      }
    },
    removeToCart: (state, { payload }: PayloadAction<ProductsProps>) => {
      console.log(state)
      console.log(payload)
    },
    incrementQuantity: (_, { payload }: PayloadAction<QuantityProps>) => {
      console.log(payload)
    },
    decrementQuantity: (_, { payload }: PayloadAction<QuantityProps>) => {
      console.log(payload)
    },
    getCart: (_, { payload }: PayloadAction<CartType>) => {
      console.log(payload)
      return payload
    },
    resetCart: () => INITIAL_STATE,
  },
})

export const { addToCart, getCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer

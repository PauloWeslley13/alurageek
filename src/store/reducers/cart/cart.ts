import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addDoc } from 'firebase/firestore'
import { ProductsProps } from '@/components/types/products-props'
import { toasts } from '@/components/ui'
import { CartType } from '@/components/types'
import { collectionCarts } from '@/config/firebase/collections'
import cartService from '@/services/get-cart'

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

const fetchCart = createAsyncThunk('cart/get', cartService.get)

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

      const existItemCart = state.data.findIndex(
        (prod) => prod.id === payload.productId,
      )

      const addProductToCart = async () => {
        if (existItemCart !== -1) {
          toasts.error({ title: 'Seu produto já esta no carinho' })
          return
        }

        await addDoc(collectionCarts, newCart)
          .then(() => {
            toasts.success({ title: 'Produto adicionado ao carrinho' })
          })
          .catch((err) => {
            console.log(err)
            toasts.error({
              title: 'Não foi possível adicionar o produto no carrinho',
            })
          })
      }

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
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (_, { payload }) => {
      return payload
    })
  },
})

export const { addToCart, getCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer

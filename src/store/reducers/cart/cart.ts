import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { addDoc } from 'firebase/firestore'
import { ProductsProps } from '@/components/types/products-props'
import { toasts } from '@/components/ui'
import { CartType } from '@/components/types'
import { collectionCarts } from '@/config/firebase/collections'

type QuantityProps = {
  id: string
  quantity: number
}

type AddToCartProps = {
  userId: string
  product: ProductsProps
}

const INITIAL_STATE = {} as CartType

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<AddToCartProps>) => {
      console.log(state)

      const cart = {
        userId: payload.userId,
        data: [...state.data, { ...payload.product, quantity: 1 }],
        totalPrice: 0,
      } satisfies CartType

      const existProductCart = state.data.find(
        (prod) => prod.id === payload.product.id,
      )

      console.log(existProductCart)

      const addProductToCart = async () => {
        console.log(existProductCart)

        if (existProductCart) {
          toasts.error({ title: 'Produto já no carinho' })
          return
        }

        await addDoc(collectionCarts, cart)
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

      // addProductToCart()
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

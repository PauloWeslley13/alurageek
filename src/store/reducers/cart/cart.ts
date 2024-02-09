import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { addDoc } from 'firebase/firestore'
import { ProductsProps } from '@/components/types/products-props'
import { toasts } from '@/components/ui'
import { CartType, ProductToCartProps } from '@/components/types'
import { collectionCarts } from '@/config/firebase/collections'

type QuantityProps = {
  id: string
  quantity: number
}

type AddToCartProps = {
  userId: string
  product: ProductsProps
}

const INITIAL_STATE: CartType[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<AddToCartProps>) => {
      console.log(state)

      const productToCart = {
        ...payload.product,
        quantity: 1,
      } satisfies ProductToCartProps

      const cart = {
        userId: payload.userId,
        data: [productToCart],
        totalPrice: 0,
      } satisfies CartType

      const addProductToCart = async () => {
        const isProductCart = state.some(
          (prod) => prod.userId === payload.userId,
        )

        const indexProductCart = state.findIndex(
          (prod) => prod.userId === payload.userId,
        )

        console.log(indexProductCart)
        console.log(isProductCart)

        if (indexProductCart !== -1) {
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

      addProductToCart()
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
    getCart: (_, { payload }: PayloadAction<CartType[]>) => {
      console.log(payload)
      return payload
    },
    resetCart: () => INITIAL_STATE,
  },
})

export const { addToCart, getCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer

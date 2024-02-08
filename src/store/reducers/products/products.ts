import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'
import {
  ProductsProps,
  SchemaProductProps,
} from '@/components/types/products-props'
import { db } from '@/config/firebase'
import { toasts } from '@/components/ui'
import productsService from '@/services/get-products'

const fetchProducts = createAsyncThunk('products/get', productsService.get)

const productsSlice = createSlice({
  name: 'products',
  initialState: [] as ProductsProps[],
  reducers: {
    createProduct: (state, { payload }: PayloadAction<SchemaProductProps>) => {
      const productsRef = collection(db, 'products')

      const created = async () => {
        const exists = state.findIndex((prod) => prod.name === payload.name)

        if (exists !== -1) {
          toasts.success({ title: 'Produto já cadastrado' })
          return
        }

        await addDoc(productsRef, { ...payload })
          .then(() => {
            toasts.success({ title: 'Produto cadastrado' })
          })
          .catch((err) => {
            console.log(err)
            toasts.error({ title: 'Não foi possível cadastrar o produto' })
          })
      }

      created()
    },
    updateProduct: (_, { payload }: PayloadAction<ProductsProps>) => {
      const updatedDocRef = doc(db, 'products', payload.id)

      const updated = async () => {
        await updateDoc(updatedDocRef, { ...payload })
          .then(() => {
            toasts.success({ title: 'Produto Atualizado' })
          })
          .catch((err) => {
            console.log(err)
            toasts.error({ title: 'Não foi possível atualizar o produto' })
          })
      }

      updated()
    },
    deleteProduct: (state, { payload }: PayloadAction<ProductsProps>) => {
      const index = state.findIndex((item) => item.id === payload.id)
      state.splice(index, 1)

      const remove = async () => {
        const deleteRef = doc(db, 'products', payload.id)
        await deleteDoc(deleteRef)
          .then(() => {
            toasts.success({ title: `Produto ${payload.name} deletado` })
          })
          .catch((err) => {
            console.log(err)
            toasts.error({ title: 'Não foi possível deletar o produto' })
          })
      }

      remove()
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (_, { payload }) => {
      return payload
    })
  },
})

export { fetchProducts }
export const { createProduct, updateProduct, deleteProduct } =
  productsSlice.actions
export const productsReducer = productsSlice.reducer

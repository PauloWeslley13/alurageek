import { addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { ProductsProps, SchemaProductProps } from '@/components/types'
import { toasts } from '@/components/ui'
import { collectionProducts } from '@/config/firebase/collections'
import { useAppDispatch, useAppSelector } from '@/store/hook/useRedux'
import { createProduct, deleteProduct, updateProduct } from '@/store/reducers'
import { db } from '@/config/firebase'

export const useProducts = () => {
  const products = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const handleProductPOST = async (data: SchemaProductProps) => {
    const isProduct = products.findIndex((prod) => prod.name === data.name)

    if (isProduct !== -1) {
      toasts.error({ title: 'Produto já cadastrado' })
      return
    }

    await addDoc(collectionProducts, { ...data })
      .then((newProduct) => {
        const products = { id: newProduct.id, ...data }
        dispatch(createProduct(products))

        toasts.success({ title: 'Produto cadastrado' })
      })
      .catch((err) => {
        console.log(err)
        toasts.error({ title: 'Não foi possível cadastrar o produto' })
      })
  }

  const handleProductPUT = async (data: ProductsProps) => {
    const updatedDocRef = doc(db, 'products', data.id)
    await updateDoc(updatedDocRef, { ...data })
      .then(() => {
        toasts.success({ title: 'Produto Atualizado' })
        dispatch(updateProduct(data))
      })
      .catch((err) => {
        console.log(err)
        toasts.error({ title: 'Não foi possível atualizar o produto' })
      })
  }

  const handleProductDELETE = async (data: ProductsProps) => {
    const deleteRef = doc(db, 'products', data.id)
    await deleteDoc(deleteRef)
      .then(() => {
        toasts.success({ title: `Produto ${data.name} deletado` })
        dispatch(deleteProduct(data))
      })
      .catch((err) => {
        console.log(err)
        toasts.error({ title: 'Não foi possível deletar o produto' })
      })
  }

  return {
    handleProductPOST,
    handleProductPUT,
    handleProductDELETE,
  }
}

import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

// Inicialize o Firebase com sua configuração
const firebaseConfig = {
  // Sua configuração do Firebase aqui
}

firebase.initializeApp(firebaseConfig)

interface Product {
  id: string
  name: string
  // Outras propriedades do produto
}

interface CartItem {
  productId: string
  quantity: number
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    // Carregue o carrinho do Firebase quando o componente for montado
    const loadCartFromFirebase = async () => {
      const cartRef = firebase.firestore().collection('carts').doc('userCart')
      const cartSnapshot = await cartRef.get()

      if (cartSnapshot.exists) {
        const cartData = cartSnapshot.data()
        setCartItems(cartData?.items || [])
      }
    }

    loadCartFromFirebase()
  }, [])

  const addToCart = (productId: string, quantity: number) => {
    // Verifique se o produto já está no carrinho
    const existingItem = cartItems.find((item) => item.productId === productId)

    if (existingItem) {
      // Atualize a quantidade se o produto já estiver no carrinho
      const updatedCart = cartItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      )

      setCartItems(updatedCart)
    } else {
      // Adicione um novo item ao carrinho
      const newCartItem: CartItem = { productId, quantity }
      const updatedCart = [...cartItems, newCartItem]

      setCartItems(updatedCart)
    }

    // Salve o carrinho no Firebase
    const cartRef = firebase.firestore().collection('carts').doc('userCart')
    cartRef.set({ items: cartItems })
  }

  return (
    <div>
      {/* Renderize seus produtos e use a função addToCart ao adicionar produtos ao carrinho */}
    </div>
  )
}

export default ShoppingCart

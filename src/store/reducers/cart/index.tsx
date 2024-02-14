import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// Inicialize o Firebase com sua configuração
const firebaseConfig = {
  // Sua configuração do Firebase aqui
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

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
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        loadCartFromFirebase(user.uid)
      } else {
        setUser(null)
        setCartItems([])
      }
    })

    return () => unsubscribe()
  }, [auth])

  const loadCartFromFirebase = async (userId: string) => {
    const cartRef = doc(db, 'carts', userId)
    const cartSnapshot = await getDoc(cartRef)

    if (cartSnapshot.exists()) {
      const cartData = cartSnapshot.data()
      setCartItems(cartData?.items || [])
    }
  }

  const addToCart = async (productId: string, quantity: number) => {
    if (!user) {
      // Usuário não autenticado, talvez redirecione para a página de login
      return
    }

    const userId = user.uid

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

    // Salve/atualize o carrinho no Firebase
    const cartRef = doc(db, 'carts', userId)

    if (cartItems.length === 0) {
      // Se o carrinho estiver vazio, use setDoc
      await setDoc(cartRef, { items: cartItems })
    } else {
      // Se o carrinho já tiver itens, use updateDoc
      await updateDoc(cartRef, { items: cartItems })
    }
  }

  return (
    <div>
      {/* Renderize seus produtos e use a função addToCart ao adicionar produtos ao carrinho */}
    </div>
  )
}

export default ShoppingCart

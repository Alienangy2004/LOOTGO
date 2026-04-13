import { useState, computed } from '#app'

interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  id_cart?: number;
}

export const useCart = () => {
  // Definimos el estado del carrito con un tipo explícito
  const cart = useState<Product[]>('cart', () => [])

  const addToCart = (product: Product) => {
    cart.value.push({ ...product, id_cart: Date.now() })
    // Usamos process.client para que alert solo corra en el navegador
    if (process.client) {
      alert(`¡${product.name} añadido!`)
    }
  }

  const removeFromCart = (index: number) => {
    cart.value.splice(index, 1)
  }

  // Tipamos el reduce para evitar el error de 'any'
  const total = computed(() => 
    cart.value.reduce((acc: number, item: Product) => acc + item.price, 0)
  )

  return { cart, addToCart, removeFromCart, total }
}
export const useCart = () => {
  const cart = useState('cart', () => [])
  
  const addToCart = (product) => {
    cart.value.push({ ...product, id_cart: Date.now(), quantity: 1 })
    if (import.meta.client) alert(`¡${product.name} añadido!`)
  }

  const total = computed(() => 
    cart.value.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  )

  return { cart, addToCart, total }
}
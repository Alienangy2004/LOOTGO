<template>
  <div class="min-h-screen bg-gray-50 pb-24">
    <header class="bg-white p-4 sticky top-0 border-b border-gray-100 flex items-center justify-between z-50">
      <NuxtLink to="/" class="text-2xl text-gray-900">←</NuxtLink>
      <h1 class="text-lg font-bold">Resumen del Pedido</h1>
      <div class="w-6"></div> 
    </header>

    <div v-if="cart.length === 0" class="p-10 text-center flex flex-col items-center pt-20">
      <span class="text-9xl mb-6">🛒</span>
      <h3 class="text-xl font-bold text-gray-800 mb-2">Tu carrito está vacío</h3>
      <p class="text-gray-500 mb-6 text-sm">Explora los comercios cercanos y añade algo delicioso.</p>
      <NuxtLink to="/" class="bg-pink-600 text-white px-8 py-3 rounded-xl font-bold">Ver Comercios</NuxtLink>
    </div>

    <div v-else class="p-4 space-y-4">
      <div v-for="(item, index) in cart" :key="item.id_cart" class="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between animate-fade-in">
        <div class="flex items-center gap-3">
          <span class="text-3xl">{{ item.img }}</span>
          <div>
            <h4 class="font-bold text-sm text-gray-800">{{ item.name }}</h4>
            <p class="text-gray-500 text-xs">${{ item.price }}.00 x 1</p>
          </div>
        </div>
        <button @click="removeFromCart(index)" class="text-red-400 text-xl font-bold p-2 hover:bg-red-50 rounded-full transition-colors">
          ⊖
        </button>
      </div>

      <div class="bg-white p-5 rounded-2xl shadow-sm space-y-2 mt-10 text-sm">
        <div class="flex justify-between text-gray-600"><span>Subtotal</span> <span>${{ total }}.00</span></div>
        <div class="flex justify-between text-gray-600"><span>Costo de envío</span> <span>$10.00</span></div>
        <div class="flex justify-between text-xl font-bold border-t pt-2 text-pink-600">
          <span>Total Final</span> <span>${{ total + 10 }}.00</span>
        </div>
      </div>

      <div class="bg-white p-4 rounded-2xl text-center border-2 border-dashed border-gray-200">
        <p class="text-xs text-gray-500">Tiempo estimado de entrega</p>
        <p class="text-2xl font-bold text-pink-600">{{ tiempoEstimado }} minutos</p>
      </div>

      <button @click="confirmarCompra" class="w-full bg-pink-600 text-white font-bold py-4 rounded-2xl mt-6 shadow-lg active:scale-95 transition-all text-lg">
        Confirmar y Pagar
      </button>
    </div>
  </div>
</template>

<script setup>
// Importamos la lógica del carrito
const { cart, total, removeFromCart } = useCart()

// Calculamos un tiempo estimado basado en la cantidad de productos o fijo aleatorio
const tiempoEstimado = ref(Math.floor(Math.random() * (45 - 20 + 1)) + 20)

const confirmarCompra = () => {
  if (cart.value.length === 0) return 

  // Datos para la notificación
  const tiempo = tiempoEstimado.value
  const hoy = new Date()
  const fechaStr = hoy.toLocaleDateString('es-MX', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  // 1. Crear el objeto de la alerta para LocalStorage
  const nuevaAlerta = {
    id: Date.now(),
    msg: `¡Pedido confirmado! Llegará en aproximadamente ${tiempo} min a tu ubicación.`,
    fecha: fechaStr
  }
  
  // 2. Persistencia en LocalStorage (Solo corre en el cliente)
  if (process.client) {
    const alertasPrevia = JSON.parse(localStorage.getItem('alertas') || '[]')
    localStorage.setItem('alertas', JSON.stringify([nuevaAlerta, ...alertasPrevia]))
  }

  // 3. Notificación nativa y limpieza
  window.alert(`🚀 COMPRA EXITOSA\n----------------------\nFecha: ${fechaStr}\nEntrega: ${tiempo} min\nTotal: $${total.value + 10}.00`)
  
  // Limpiar el carrito globalmente
  cart.value = []
  
  // Redirigir a la página de alertas que creamos antes
  navigateTo('/alerts')
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
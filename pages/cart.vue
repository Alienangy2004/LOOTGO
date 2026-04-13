<template>
  <div class="min-h-screen bg-white">
    <header class="bg-pink-600 p-4 text-white flex items-center">
      <NuxtLink to="/" class="mr-4">←</NuxtLink>
      <h1 class="text-xl font-bold">Carrito ({{ cart.length }})</h1>
    </header>

    <div class="p-4 space-y-4">
      <div v-for="(item, index) in cart" :key="item.id_cart" class="flex items-center justify-between border-b pb-4">
        <div class="flex items-center">
          <span class="text-2xl mr-3">🛍️</span>
          <div>
            <h4 class="font-bold text-sm">{{ item.name }}</h4>
            <p class="text-gray-500 text-xs">${{ item.price }}.00 x 1</p>
          </div>
        </div>
        <button @click="removeFromCart(index)" class="text-red-500 font-bold text-xl">⊖</button>
      </div>

      <div class="mt-10 space-y-2 border-t pt-4 text-sm">
        <div class="flex justify-between text-gray-600"><span>Subtotal:</span> <span>${{ total }}.00</span></div>
        <div class="flex justify-between text-gray-600"><span>Costo de envío:</span> <span>$5.00</span></div>
        <div class="flex justify-between text-xl font-bold border-t pt-2 text-cyan-500">
          <span>Total Final:</span> <span>${{ total + 5 }}.00</span>
        </div>
      </div>

      <button class="w-full bg-cyan-400 text-white font-bold py-3 rounded-xl mt-6">
        Confirmar Dirección y Pagar
      </button>
    </div>
  </div>
</template>

<script setup>
const { cart, removeFromCart, total } = useCart()
</script>
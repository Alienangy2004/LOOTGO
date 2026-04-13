<template>
  <nav class="fixed bottom-0 w-full bg-white border-t border-gray-100 flex justify-around p-3 text-[10px] z-50">
    <NuxtLink to="/" class="flex flex-col items-center text-gray-400" active-class="text-pink-600">
      <span class="text-2xl mb-1">🏪</span>
      <span>Comercios</span>
    </NuxtLink>
    <NuxtLink to="/cart" class="flex flex-col items-center text-gray-400" active-class="text-pink-600 relative">
      <span class="text-2xl mb-1">🛒</span>
      <span>Carrito</span>
      <span v-if="cart.length > 0" class="absolute -top-1 -right-1 bg-pink-600 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
        {{ cart.length }}
      </span>
    </NuxtLink>
    <NuxtLink to="/map" class="flex flex-col items-center text-gray-400" active-class="text-pink-600">
      <span class="text-2xl mb-1">🗺️</span>
      <span>Mapa</span>
    </NuxtLink>
  </nav>
</template>

<script setup>
const { cart } = useCart()
</script>
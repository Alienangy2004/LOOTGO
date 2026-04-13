<script setup>
// Importamos tu "base de datos" local
import productsData from '~/data/products.json'

const products = ref(productsData)
</script>

<template>
  <div class="p-6 bg-black min-h-screen text-white">
    <h1 class="text-3xl font-bold text-cyan-400 mb-6 uppercase tracking-widest">
      Catálogo de Productos - CIS
    </h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="item in products" 
        :key="item.id"
        class="border border-cyan-900 bg-gray-900 p-4 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:border-cyan-400 transition"
      >
        <h2 class="text-xl font-semibold">{{ item.name }}</h2>
        <p class="text-gray-400 text-sm mb-2">{{ item.category }}</p>
        <p class="text-2xl font-mono text-green-400">${{ item.price.toFixed(2) }}</p>
        
        <button class="mt-4 w-full bg-cyan-600 hover:bg-cyan-500 text-white py-2 rounded uppercase text-xs font-bold">
          Añadir al carrito
        </button>
      </div>
    </div>
  </div>
</template>
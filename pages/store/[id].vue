<template>
  <div v-if="store" class="min-h-screen pb-32 relative z-10">
    <div :class="store.color" class="p-8 pt-12 text-white relative shadow-2xl overflow-hidden rounded-b-[3rem]">
      <div class="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      
      <NuxtLink to="/" class="absolute top-4 left-4 z-20 w-10 h-10 rendered-card flex items-center justify-center text-xl shadow-lg">
        ←
      </NuxtLink>

      <div class="flex items-center gap-6 relative z-10">
        <span class="text-6xl bg-white/20 p-4 rounded-[2rem] backdrop-blur-md border border-white/30 shadow-2xl animate-pulse">
          {{ store.icon }}
        </span>
        <div>
          <h2 class="text-3xl font-black italic tracking-tighter drop-shadow-lg">{{ store.name }}</h2>
          <div class="flex items-center gap-2 mt-2">
            <span class="text-[10px] bg-white text-gray-900 px-3 py-1 rounded-full font-black shadow-sm">ABIERTO</span>
            <p class="text-[10px] font-bold uppercase tracking-widest opacity-90">Sincronizado con ITGAM</p>
          </div>
        </div>
      </div>
    </div>

    <div class="p-6">
      <div class="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
        <h3 class="font-black uppercase tracking-[0.3em] text-sm opacity-70">Nuestro Catálogo Real</h3>
        <span class="text-[10px] bg-pink-600 text-white px-4 py-1.5 rounded-full font-black shadow-lg animate-bounce">
          10 PRODUCTOS
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="product in store.products" :key="product.id" 
          class="rendered-card p-6 flex flex-col transition-all hover:scale-[1.02] active:scale-95 border border-white/10">
          
          <div class="flex gap-6 items-center mb-6">
            <div class="bg-white/10 w-24 h-24 rounded-3xl flex items-center justify-center text-5xl shadow-inner border border-white/5">
              {{ product.img }}
            </div>
            <div class="flex-grow">
              <h4 class="font-black text-lg leading-tight mb-2">{{ product.name }}</h4>
              <p class="text-2xl font-black text-pink-500 italic">${{ product.price }}.00</p>
            </div>
          </div>
          
          <ul class="space-y-2 mb-8 pl-2">
            <li v-for="(spec, index) in product.specs" :key="index" 
              class="text-[10px] font-bold flex items-center gap-2 opacity-70 uppercase tracking-wider">
              <span class="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
              {{ spec }}
            </li>
          </ul>

          <button @click="addToCart(product)" class="btn-neon-anim w-full py-4">
            <span></span><span></span><span></span><span></span>
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>

    <NuxtLink v-if="cart.length > 0" to="/cart" 
      class="fixed bottom-24 left-6 right-6 rendered-card p-5 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-[60] border-pink-500/30">
      <div class="flex items-center gap-4">
        <span class="bg-pink-600 w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black shadow-lg">
          {{ cart.length }}
        </span>
        <span class="font-black uppercase tracking-[0.2em] text-xs">Revisar Pedido</span>
      </div>
      <span class="font-black text-xl text-pink-500">${{ total + 10 }}.00</span>
    </NuxtLink>
  </div>

  <div v-else class="h-screen flex flex-col items-center justify-center gap-4">
    <div class="animate-spin text-5xl">🌀</div>
    <p class="font-black uppercase tracking-[0.5em] text-[10px] opacity-40 italic">Cargando Inventario...</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { cart, total, addToCart } = useCart()

// Consumimos los 8 locales de la API
const { data: stores } = await useFetch('/api/stores')

const store = computed(() => {
  return stores.value?.find(s => s.id === route.params.id)
})
</script>
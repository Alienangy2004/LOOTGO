<template>
  <div class="p-6 pb-32 relative z-10">
    <div class="flex justify-between items-center mb-10 px-2">
      <h1 class="text-5xl font-black italic tracking-tighter text-pink-600 drop-shadow-2xl">LOOTGO</h1>
    </div>

    <h2 class="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-60 pl-2">
      Locales Disponibles (ITGAM)
    </h2>

    <div v-if="stores && stores.length > 0" class="space-y-6">
      <NuxtLink v-for="store in stores" :key="store.id" :to="`/store/${store.id}`"
        class="rendered-card group relative h-44 flex items-center p-8 overflow-hidden border border-white/10 hover:scale-[1.02] transition-transform duration-300">
        
        <div class="w-24 h-24 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center text-5xl z-10 group-hover:rotate-6 transition-transform">
          {{ store.icon }}
        </div>

        <div class="ml-8 z-10">
          <h4 class="text-2xl font-black leading-none mb-2 drop-shadow-md">
            {{ store.name }}
          </h4>
          <p class="text-[10px] font-bold uppercase tracking-widest text-pink-500">{{ store.category }}</p>
          
          <div class="flex items-center gap-3 mt-4">
            <span class="bg-pink-600 text-white text-[9px] px-3 py-1 rounded-full font-black shadow-lg">
              ⭐ {{ store.rating }}
            </span>
            <span class="text-[10px] font-bold opacity-50">{{ store.reviews }} reseñas</span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div v-else class="text-center py-20">
      <div class="animate-spin text-4xl mb-4">🌀</div>
      <p class="text-xs font-bold uppercase tracking-widest opacity-50">Sincronizando comercios...</p>
    </div>
  </div>
</template>

<script setup>
// Forzamos el refresh para que no use caché vieja
const { data: stores, refresh } = await useFetch('/api/stores')

onMounted(() => {
  refresh() // Recarga los datos al entrar
})
</script>
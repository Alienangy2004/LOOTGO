<template>
  <div class="p-4">
    <div class="bg-pink-600 rounded-3xl p-6 mb-6 text-white shadow-lg">
      <h2 class="text-2xl font-bold mb-1">Hola Vecino! 👋</h2>
      <p class="text-sm opacity-90">¿Qué necesitas hoy para el ITGAM?</p>
    </div>

    <div class="flex gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
      <button v-for="cat in categories" :key="cat" 
        class="px-5 py-2 rounded-full text-xs whitespace-nowrap border"
        :class="activeFilter === cat ? 'bg-pink-600 text-white border-pink-600' : 'bg-white text-gray-700 border-gray-200'"
        @click="activeFilter = cat">
        {{ cat }}
      </button>
    </div>

    <div class="flex justify-between items-center mb-4">
      <h3 class="text-xl font-bold text-gray-900">Explora todos los negocios</h3>
      <span class="text-xs text-pink-600 underline">Ver más</span>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <NuxtLink v-for="store in filteredStores" :key="store.id" :to="`/store/${store.id}`"
        class="rounded-3xl p-5 flex flex-col items-center justify-center text-white shadow-xl transition-all hover:scale-105 active:scale-95"
        :class="store.color">
        <span class="text-6xl mb-3">{{ store.icon }}</span>
        <h4 class="font-bold text-base leading-tight">{{ store.name }}</h4>
        <div class="flex items-center text-[10px] mt-2 opacity-90">
          ⭐ {{ store.rating }} | 💬 {{ store.reviews }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const activeFilter = ref('Todos')
const categories = ['Todos', 'Pizzerías', 'Panaderías', 'Farmacias']

const { data: stores } = await useFetch('/api/stores')

const filteredStores = computed(() => {
  if (activeFilter.value === 'Todos') return stores.value
  return stores.value?.filter(s => s.category.toLowerCase() === activeFilter.value.toLowerCase().replace('í','i'))
})
</script>
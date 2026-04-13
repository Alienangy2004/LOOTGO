<template>
  <div class="p-4">
    <div class="bg-purple-700 -mx-4 -mt-4 p-4 mb-6 text-white">
      <h2 class="text-lg font-semibold">Comercios Locales Cerca de Usted Siempre o no?</h2>
    </div>

    <div class="flex gap-2 overflow-x-auto pb-4 mb-4">
      <button class="px-4 py-1 bg-purple-600 text-white rounded-lg whitespace-nowrap">✓ Todos</button>
      <button class="px-4 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Panaderías</button>
      <button class="px-4 py-1 bg-gray-100 rounded-lg whitespace-nowrap">Ferreterías</button>
    </div>

    <h3 class="font-bold mb-4">Explora todos los negocios</h3>
    <div class="grid grid-cols-2 gap-4">
      <NuxtLink v-for="store in stores" :key="store.id" :to="`/store/${store.id}`"
        class="aspect-square rounded-3xl p-4 flex flex-col items-center justify-center text-white text-center shadow-lg"
        :class="store.color">
        <span class="text-4xl mb-2">{{ store.icon }}</span>
        <span class="font-bold text-sm leading-tight">{{ store.name }}</span>
        <span class="text-[10px] opacity-80">({{ store.category }})</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: stores } = await useFetch('/api/stores')
</script>
<template>
  <nav class="fixed bottom-0 w-full bg-white border-t border-gray-100 flex justify-around p-3 text-[10px] z-50">
    <NuxtLink to="/" class="flex flex-col items-center text-gray-400" active-class="text-pink-600">
      <span class="text-xl">🏪</span>
      <span>Comercios</span>
    </NuxtLink>
    <NuxtLink to="/alerts" class="flex flex-col items-center text-gray-400" active-class="text-pink-600">
      <span class="text-xl">🔔</span>
      <span>Alertas</span>
    </NuxtLink>
    <NuxtLink to="/profile" class="flex flex-col items-center text-gray-400" active-class="text-pink-600">
      <span class="text-xl">👤</span>
      <span>Perfil</span>
    </NuxtLink>
    <NuxtLink to="/map" class="flex flex-col items-center text-gray-400" active-class="text-pink-600">
      <span class="text-xl">🗺️</span>
      <span>Mapa</span>
    </NuxtLink>
  </nav>
</template>
<template>
  <header class="p-4 bg-white shadow-sm sticky top-0 z-50 flex justify-between items-center border-b border-gray-100">
    <div class="flex items-center gap-2">
      <span class="text-2xl text-pink-600">📍</span>
      <div>
        <h1 class="text-sm font-bold text-gray-900">Calle Falsa 123</h1>
        <p class="text-[10px] text-gray-500">Cerca de ITGAM</p>
      </div>
    </div>
    <NuxtLink to="/profile" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs">
      Perfil
    </NuxtLink>
  </header>
</template>
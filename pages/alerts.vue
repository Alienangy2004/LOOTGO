<template>
  <div class="min-h-screen p-6 pb-32">
    <header class="flex items-center gap-4 mb-10">
      <NuxtLink to="/" class="rendered-card p-3">←</NuxtLink>
      <h1 class="text-3xl font-black italic">Alertas</h1>
    </header>

    <div class="space-y-6">
      <div v-if="alertas.length === 0" class="rendered-card p-10 text-center">
        <span class="text-6xl block mb-4">🔔</span>
        <p class="font-bold opacity-60 uppercase tracking-widest text-xs">Sin notificaciones</p>
      </div>

      <div v-for="alerta in alertas" :key="alerta.id" class="rendered-card p-6 border-l-4" :style="{ borderColor: 'var(--accent-neon)' }">
        <div class="flex justify-between items-start mb-4">
          <h3 class="font-bold text-lg">Confirmación de Pedido</h3>
          <span class="text-[10px] font-black opacity-50">{{ alerta.fecha }}</span>
        </div>
        <p class="text-sm opacity-80 mb-6">{{ alerta.msg }}</p>
        
        <button @click="eliminarAlerta(alerta.id)" class="btn-rendered w-full">
          <span></span><span></span><span></span><span></span>
          Eliminar Alerta
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const alertas = ref([])
onMounted(() => { if (import.meta.client) { alertas.value = JSON.parse(localStorage.getItem('alertas') || '[]') } })
const eliminarAlerta = (id) => {
  alertas.value = alertas.value.filter(a => a.id !== id)
  localStorage.setItem('alertas', JSON.stringify(alertas.value))
}
</script>
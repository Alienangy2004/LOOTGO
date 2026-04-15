<template>
  <header class="rendered-card m-4 p-4 flex items-center justify-between border-none shadow-lg relative z-[80]">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-xl shadow-inner">
        📍
      </div>
      <div>
        <h4 class="text-[12px] font-black leading-none" :style="{ color: 'var(--text-main)' }">
          Calle Falsa 123
        </h4>
        <p class="text-[9px] font-bold opacity-50 uppercase tracking-tighter">Cerca de ITGAM</p>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <button @click="irAlLogin" 
        class="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-90 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white shadow-lg shadow-pink-500/20">
        {{ isAuth ? 'Cerrar Sesión' : 'Iniciar Sesión' }}
      </button>
    </div>
  </header>
</template>

<script setup>
const isAuth = ref(false)

// Verificamos el estado de la sesión al cargar
onMounted(() => {
  if (process.client) {
    isAuth.value = !!localStorage.getItem('isAuth')
  }
})

const irAlLogin = () => {
  if (isAuth.value) {
    // Si ya está logueado, cerramos sesión
    localStorage.removeItem('isAuth')
    isAuth.value = false
    navigateTo('/login')
  } else {
    // Si no, lo mandamos a loguearse o registrarse
    navigateTo('/login')
  }
}
</script>

<style scoped>
/* Aseguramos que el header sea tipo Glass como en tus imágenes */
.rendered-card {
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
<template>
  <div class="min-h-screen p-6 pb-40 relative z-10">
    
    <div class="flex items-center gap-4 mb-10">
      <NuxtLink 
        to="/" 
        class="rendered-card w-12 h-12 flex items-center justify-center text-xl hover:scale-110 active:scale-90 transition-all border border-white/10 shadow-lg"
      >
        ←
      </NuxtLink>
      
      <div>
        <h1 class="text-3xl font-black italic tracking-tighter text-pink-600 drop-shadow-md">
          Soporte
        </h1>
        <p class="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">
          Contacto Directo / ITGAM
        </p>
      </div>
    </div>

    <section class="animate-fade-in">
      <ContactForm />
    </section>

    <div class="fixed -bottom-20 -right-20 w-80 h-80 bg-cyan-500 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
  </div>
</template>

<script setup>
// En Nuxt 3, los componentes dentro de /components se auto-importan.
// No necesitas hacer nada aquí, pero dejamos el script listo por si
// quieres agregar lógica de analíticas después.
</script>

<style scoped>
/* Animación de entrada suave para el formulario */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
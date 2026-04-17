<template>
  <div class="rendered-card p-8 mt-10 border border-white/10 relative overflow-hidden">
    <h3 class="text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
      Soporte de Proyecto
    </h3>
    
    <form @submit.prevent="enviarDatos" class="space-y-5 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="text-[9px] font-black uppercase opacity-50 ml-2">Nombre Completo *</label>
          <input v-model="form.nombre" type="text" required class="neon-input-render" placeholder="Angel Armando">
        </div>
        <div>
          <label class="text-[9px] font-black uppercase opacity-50 ml-2">Correo Institucional *</label>
          <input v-model="form.correo" type="email" required class="neon-input-render" placeholder="angel@itgam.mx">
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="text-[9px] font-black uppercase opacity-50 ml-2">Teléfono / WhatsApp *</label>
          <input v-model="form.telefono" type="tel" required class="neon-input-render" placeholder="5512345678">
        </div>
        <div>
          <label class="text-[9px] font-black uppercase opacity-50 ml-2">Nombre del Proyecto *</label>
          <input v-model="form.proyecto" type="text" required class="neon-input-render" placeholder="LOOTGO MVP">
        </div>
      </div>

      <div>
        <label class="text-[9px] font-black uppercase opacity-50 ml-2">Mensaje o Duda *</label>
        <textarea v-model="form.mensaje" required class="neon-input-render h-32 resize-none" placeholder="Describe tu solicitud..."></textarea>
      </div>

      <button type="submit" :disabled="loading" class="btn-neon-anim w-full py-5">
        <span></span><span></span><span></span><span></span>
        {{ loading ? 'ENVIANDO...' : 'GUARDAR EN TABLA' }}
      </button>
    </form>
  </div>
</template>

<script setup>
const loading = ref(false)
const form = ref({
  nombre: '',
  correo: '',
  mensaje: '',
  telefono: '',
  proyecto: ''
})

const enviarDatos = async () => {
  loading.value = true
  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    
    alert('✅ ¡Datos registrados en Google Sheets con éxito!');
    // Limpiar formulario
    form.value = { nombre: '', correo: '', mensaje: '', telefono: '', proyecto: '' }
  } catch (e) {
    alert('❌ Error: ' + e.statusMessage)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.neon-input-render {
  @apply w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 ring-cyan-500 transition-all text-sm;
}
</style>
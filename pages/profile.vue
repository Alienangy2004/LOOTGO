<template>
  <div class="min-h-screen p-6 pb-32">
    <div class="rendered-card p-8 mb-8 text-center">
      <div class="w-24 h-24 bg-gradient-to-tr from-pink-500 to-indigo-600 rounded-3xl mx-auto mb-4 flex items-center justify-center text-4xl text-white font-black shadow-xl">
        {{ user.Nombre[0] }}
      </div>
      <h2 class="text-2xl font-black">{{ user.Nombre }}</h2>
      <p class="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500">{{ user.Bio }}</p>
    </div>

    <div class="rendered-card p-6 space-y-4">
      <div v-for="(val, key) in user" :key="key" class="border-b border-white/10 pb-2">
        <p class="text-[9px] font-black uppercase opacity-40">{{ key }}</p>
        <input v-if="editMode" v-model="user[key]" class="w-full bg-transparent border-none outline-none text-sm font-bold" :style="{ color: 'var(--text-main)' }">
        <p v-else class="font-bold text-sm">{{ val }}</p>
      </div>

      <button @click="toggleEdit" class="btn-neon-anim w-full mt-6">
        <span></span><span></span><span></span><span></span>
        {{ editMode ? 'Guardar Cambios' : 'Editar Información' }}
      </button>

      <button @click="logout" class="btn-neon-anim w-full mt-4 border-red-500 text-red-500 hover:bg-red-500">
        <span></span><span></span><span></span><span></span>
        Cerrar Sesión
      </button>
    </div>
  </div>
</template>

<script setup>
const editMode = ref(false)
const user = ref({ Nombre: 'Angel Armando', Carrera: 'TICS', Semestre: '9no', Institucion: 'ITGAM', Correo: 'angel@itgam.mx', Bio: 'Mejor promedio' })

const toggleEdit = () => { editMode.value = !editMode.value }
const logout = () => { navigateTo('/login'); }
</script>
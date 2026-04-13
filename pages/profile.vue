<template>
  <div class="p-6 bg-white min-h-screen pb-24 text-black">
    <h2 class="text-2xl font-bold mb-6 text-pink-600 italic">Mi Perfil</h2>
    
    <div class="space-y-4">
      <div v-for="(val, key) in user" :key="key" class="border-b py-2">
        <label class="text-[10px] uppercase text-gray-400">{{ key }}</label>
        <input v-if="editMode" v-model="user[key]" class="w-full text-sm border-pink-200 border p-1 rounded">
        <p v-else class="text-sm font-semibold">{{ val || 'No definido' }}</p>
      </div>
    </div>

    <button @click="toggleEdit" class="w-full mt-6 py-3 rounded-xl font-bold transition"
      :class="editMode ? 'bg-green-500 text-white' : 'bg-pink-600 text-white'">
      {{ editMode ? 'Guardar Cambios' : 'Editar Perfil' }}
    </button>
  </div>
</template>

<script setup>
const editMode = ref(false)
const user = ref({
  Nombre: 'Ricardo', Apellido: 'Sanchez', Carrera: 'TICS', Semestre: '9no', 
  Institucion: 'ITGAM', Correo: 'ricardo@itgam.edu.mx', Telefono: '5512345678', 
  Dirección: 'Calle Falsa 123', Ciudad: 'CDMX', Bio: 'Mejor promedio'
})

onMounted(() => {
  const saved = localStorage.getItem('user_data')
  if (saved) user.value = JSON.parse(saved)
})

const toggleEdit = () => {
  if (editMode.value) localStorage.setItem('user_data', JSON.stringify(user.value))
  editMode.value = !editMode.value
}
</script>
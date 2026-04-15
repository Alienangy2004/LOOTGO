<template>
  <div class="h-screen flex flex-col items-center justify-center p-6 bg-slate-950 relative overflow-hidden">
    <div class="absolute w-80 h-80 bg-blue-600 rounded-full blur-[120px] -top-10 -right-10 opacity-30 animate-pulse"></div>

    <div class="rendered-card p-10 rounded-[3rem] w-full max-w-md text-center z-10 border border-white/10">
      <h1 class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-6 italic">REGISTRO</h1>
      
      <div class="space-y-4 text-left">
        <div>
          <label class="text-[10px] font-bold text-gray-500 ml-2 uppercase">Nombre Completo</label>
          <input v-model="form.name" type="text" placeholder="Ej. Angel Armando" class="w-full p-4 rounded-2xl border-none bg-white/10 text-white outline-none focus:ring-2 ring-blue-500">
        </div>
        <div>
          <label class="text-[10px] font-bold text-gray-500 ml-2 uppercase">Correo</label>
          <input v-model="form.email" type="email" placeholder="itgam@estudiante.mx" class="w-full p-4 rounded-2xl border-none bg-white/10 text-white outline-none focus:ring-2 ring-blue-500">
        </div>
        <div>
          <label class="text-[10px] font-bold text-gray-500 ml-2 uppercase">Contraseña</label>
          <input v-model="form.pass" type="password" placeholder="••••••••" class="w-full p-4 rounded-2xl border-none bg-white/10 text-white outline-none focus:ring-2 ring-blue-500">
        </div>
        
        <button @click="handleRegister" class="btn-neon-anim w-full mt-4">
          <span></span><span></span><span></span><span></span>
          CREAR CUENTA
        </button>
      </div>
      
      <p class="mt-8 text-xs text-gray-500">¿Ya tienes cuenta? <NuxtLink to="/login" class="text-blue-400 font-bold underline">Inicia Sesión</NuxtLink></p>
    </div>
  </div>
</template>

<script setup>
const form = ref({ name: '', email: '', pass: '' })
const handleRegister = () => {
  if(form.value.email && form.value.pass) {
    alert("¡Cuenta creada con éxito!")
    navigateTo('/login')
  }
}
</script>
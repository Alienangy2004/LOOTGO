<template>
  <div class="h-screen flex flex-col items-center justify-center p-6 bg-slate-950 relative overflow-hidden">
    <div class="absolute w-80 h-80 bg-pink-600 rounded-full blur-[120px] -top-10 -left-10 opacity-30 animate-pulse"></div>

    <div class="rendered-card p-10 rounded-[3rem] w-full max-w-md text-center z-10 border border-white/10">
      <h1 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 mb-2 italic">LOOTGO</h1>
      <p class="text-gray-400 text-[10px] font-black tracking-[0.3em] mb-10 uppercase italic">Ingeniería TICs</p>
      
      <div class="space-y-4">
        <input v-model="email" type="email" placeholder="Correo ITGAM" class="w-full p-4 rounded-2xl border-none bg-white/10 text-white outline-none focus:ring-2 ring-pink-500">
        <input v-model="pass" type="password" placeholder="Contraseña" class="w-full p-4 rounded-2xl border-none bg-white/10 text-white outline-none focus:ring-2 ring-pink-500">
        
        <button @click="handleLogin" class="btn-neon-anim w-full">
          <span></span><span></span><span></span><span></span>
          INGRESAR
        </button>
      </div>
      
      <p class="mt-8 text-xs text-gray-500 text-center">
        ¿Nuevo aquí? <NuxtLink to="/register" class="text-pink-500 font-bold underline">Regístrate</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
const email = ref(''); const pass = ref('');
const handleLogin = () => {
  if(email.value && pass.value) {
    localStorage.setItem('isAuth', 'true') // Guardamos la sesión
    navigateTo('/') // Navegamos al inicio
  } else {
    alert("Ingresa tus credenciales")
  }
}
</script>
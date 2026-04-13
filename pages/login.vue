<template>
  <div class="h-screen flex flex-col items-center justify-center p-6 bg-indigo-900 text-white">
    <h1 class="text-4xl font-bold mb-10 italic">LOOTGO</h1>
    <div class="w-full space-y-4">
      <input v-model="email" placeholder="Correo" class="w-full p-4 rounded-xl text-black">
      <input v-model="pass" type="password" placeholder="Contraseña" class="w-full p-4 rounded-xl text-black">
      <button @click="login" class="w-full bg-pink-600 py-4 rounded-xl font-bold">Entrar</button>
    </div>
  </div>
</template>

<script setup>
const email = ref(''); const pass = ref('');
const login = () => {
  if(email.value && pass.value) {
    localStorage.setItem('isAuth', 'true');
    navigateTo('/');
  }
}
</script>
<template>
  <div class="min-h-screen">
    
    <button @click="toggleTheme" 
      class="fixed top-4 left-4 z-[100] w-12 h-12 rounded-2xl rendered-card flex items-center justify-center text-xl shadow-2xl active:scale-90 transition-all border border-white/20">
      {{ isDark ? '🌙' : '☀️' }}
    </button>

    <AppHeader v-if="!hideLayout" />
    
    <main class="relative z-10">
      <slot />
    </main>
    
    <AppFooter v-if="!hideLayout" />
  </div>
</template>

<script setup>
const route = useRoute()
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const themeValue = isDark.value ? 'dark' : 'light'
  
  // Esto fuerza al navegador a aplicar el [data-theme="dark"] del CSS
  document.documentElement.setAttribute('data-theme', themeValue)
  localStorage.setItem('user-theme', themeValue)
}

const hideLayout = computed(() => ['/login', '/register'].includes(route.path))

onMounted(() => {
  const saved = localStorage.getItem('user-theme')
  if (saved === 'dark') {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})
</script>
export default defineNuxtConfig({
  // Actualiza esto a la fecha de hoy para quitar el Warning
  compatibilityDate: '2026-04-13', 
  
  ssr: false,

  // Asegúrate de que los módulos estén así para que Tailwind no falle
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  devServer: {
    host: '127.0.0.1',
    port: 3001
  },

  // Mantenemos esto por el tema del Firewall en Windows
  vite: {
    server: {
      hmr: false,
      watch: { usePolling: true }
    }
  }
})
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // 1. Configuración de compatibilidad (Evita el warning de 2024)
  compatibilityDate: '2024-04-03',

  // 2. Renderizado del lado del cliente (Crítico para evitar errores de hidratación)
  ssr: false,

  // 3. Módulos: Sin esto, Tailwind NO funciona
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // 4. CSS Global: Importa tus directivas de Tailwind
  css: [
    '~/assets/css/main.css'
  ],

  // 5. Configuración de la App (Para los iconos y Google Maps)
  app: {
    head: {
      title: 'LootGo - ITGAM 2026',
      script: [
        { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBv_-ruq8hJ85rQ0AgA52n5j6XClmJiL4I' } // Doble seguridad para estilos
      ]
    }
  },

  // 6. Servidor: Tu configuración de puerto fuera de OneDrive
  devServer: {
    host: '127.0.0.1',
    port: 3001
  },

  // 7. Solución definitiva al error de esbuild/tsconfig en Windows
  typescript: {
    typeCheck: false,
    strict: false,
    includeWorkspace: false
  },

  // 8. Vite: Desactivamos HMR para que el Firewall de Windows no bloquee el IPC
  vite: {
    server: {
      hmr: false,
      watch: {
        usePolling: true
      }
    },
    esbuild: {
      tsconfigRaw: `{
        "compilerOptions": {
          "target": "esnext",
          "module": "esnext",
          "lib": ["esnext", "dom"],
          "moduleResolution": "node",
          "isolatedModules": true,
          "useDefineForClassFields": true,
          "jsx": "preserve"
        }
      }`
    }
  }
})
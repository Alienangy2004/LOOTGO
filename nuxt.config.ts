import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // 1. Configuración de compatibilidad
  compatibilityDate: '2024-04-03',

  // 2. Renderizado del lado del cliente para evitar errores de hidratación
  ssr: false,

  // 3. Módulos esenciales
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // 4. CSS Global de Tailwind
  css: [
    '~/assets/css/main.css'
  ],

  // 5. Configuración de la App (Metadatos y Google Maps)
  app: {
    head: {
      title: 'LootGo - ITGAM 2026',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        { 
          src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBv_-ruq8hJ85rQ0AgA52n5j6XClmJiL4I&libraries=places', 
          async: true, 
          defer: true 
        }
      ]
    }
  },

  // 6. SOLUCIÓN AL ERROR #app-manifest (Desactiva la característica experimental que falla en Windows)
  experimental: {
    appManifest: false
  },

  // 7. Servidor de desarrollo
  devServer: {
    host: '127.0.0.1',
    port: 3001
  },

  // 8. Configuración de TypeScript (Bypass para errores de esbuild)
  typescript: {
    typeCheck: false,
    strict: false,
    includeWorkspace: false
  },

  // 9. Configuración de Vite (Optimizado para evitar bloqueos de Windows)
  vite: {
    server: {
      hmr: false, // Desactivado para evitar errores de conexión con el Firewall
      watch: {
        usePolling: true // Forzar detección de cambios en disco
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
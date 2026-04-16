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

  // 5. Configuración de la App (Ajustado para Vercel)
  app: {
    // En Vercel la raíz es "/", no necesitas "/LOOTGO/"
    baseURL: '/', 
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

  // 6. Configuración de Nitro (Vercel detecta esto automáticamente, no necesita preset de github)
  nitro: {
    // Aquí puedes dejarlo vacío o configurar funciones específicas si las necesitas
  },

  // 7. SOLUCIÓN AL ERROR #app-manifest (Mantenemos esta corrección para Windows)
  experimental: {
    appManifest: false
  },

  // 8. Servidor de desarrollo
  devServer: {
    host: '127.0.0.1',
    port: 3001
  },

  // 9. Configuración de TypeScript
  typescript: {
    typeCheck: false,
    strict: false,
    includeWorkspace: false
  },

  // 10. Configuración de Vite (Mantenemos ajustes para evitar bloqueos en tu PC local)
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
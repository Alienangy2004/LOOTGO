export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.client) {
    const isAuth = localStorage.getItem('isAuth')
    
    // Si NO está logueado y NO va a login o register, mandarlo a login
    if (!isAuth && to.path !== '/login' && to.path !== '/register') {
      return navigateTo('/login')
    }

    // Si YA está logueado y quiere ir a login, mandarlo al inicio
    if (isAuth && to.path === '/login') {
      return navigateTo('/')
    }
  }
})
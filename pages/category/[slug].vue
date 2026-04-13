<template>
  <div style="background: #000; color: #0ff; padding: 20px;">
    <h1>Categoría: {{ $route.params.slug }}</h1>
    <NuxtLink to="/" style="color: #fff;">[ Volver al Inicio ]</NuxtLink>
  </div>
</template>
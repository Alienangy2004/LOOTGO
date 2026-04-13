<template>
  <div style="background: #000; color: #fff; padding: 30px;">
    <h2>UBICACIÓN ACTUAL</h2>
    <button @click="localizar" style="background: #0ff; padding: 10px; cursor: pointer;">
      OBTENER GPS
    </button>
    <p v-if="lat">Latitud: {{ lat }} | Longitud: {{ lng }}</p>
  </div>
</template>

<script setup>
const lat = ref(null); const lng = ref(null);
const localizar = () => {
  navigator.geolocation.getCurrentPosition((p) => {
    lat.value = p.coords.latitude;
    lng.value = p.coords.longitude;
  });
};
</script>
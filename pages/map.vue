<template>
  <div class="h-screen w-full relative">
    <div id="map" class="h-full w-full"></div>
    
    <div class="absolute bottom-28 left-6 right-6 z-10">
      <div class="rendered-card p-6">
        <h3 class="text-sm font-black mb-4 flex items-center gap-2" :style="{ color: 'var(--text-main)' }">
          <span class="animate-ping w-2 h-2 bg-pink-500 rounded-full"></span>
          Ubicación GPS en vivo
        </h3>
        <button @click="centrarMapa" class="btn-neon-anim w-full">
          <span></span><span></span><span></span><span></span>
          Recalibrar Posición
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
let map; let marker;
const centrarMapa = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((p) => {
      const pos = { lat: p.coords.latitude, lng: p.coords.longitude };
      map.setCenter(pos); marker.setPosition(pos);
    });
  }
}
onMounted(() => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.4851, lng: -99.1102 },
    zoom: 16,
    disableDefaultUI: true
  });
  marker = new google.maps.Marker({ position: { lat: 19.4851, lng: -99.1102 }, map });
  centrarMapa();
})
</script>
<template>
  <div class="h-screen w-full flex flex-col">
    <div id="map" class="flex-grow w-full bg-gray-200"></div>
    <div class="p-4 bg-white border-t text-center">
      <button @click="geolocalizar" class="bg-pink-600 text-white px-6 py-2 rounded-full font-bold">
        📍 MI UBICACIÓN ACTUAL
      </button>
    </div>
  </div>
</template>

<script setup>
let map;
let marker;

const geolocalizar = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      map.setCenter(pos);
      marker.setPosition(pos);
      marker.setAnimation(google.maps.Animation.BOUNCE);
    });
  }
};

onMounted(() => {
  // Coordenadas iniciales (CDMX)
  const initialPos = { lat: 19.4326, lng: -99.1332 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: initialPos,
    zoom: 15,
    styles: [ { featureType: "all", elementType: "all", stylers: [{ saturation: -100 }] } ] // Mapa limpio
  });
  marker = new google.maps.Marker({ position: initialPos, map: map, title: "Estás aquí" });
});
</script>
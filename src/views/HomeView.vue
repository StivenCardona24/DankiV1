<script setup lang="ts">
import HeaderNav from '@/components/headerNav.vue';

</script>

<template>
<div class=" home">
  <header-nav/>
</div>
</template>

<style scoped>

.home {
  /* Establece la imagen de fondo */
  background-image: url("../assets/images/Background2.jpg");
  /* Ajusta el tamaño y la posición de la imagen */
  background-size: cover;
  background-position: center;
  /* Asegura que el contenedor ocupe toda la pantalla */
  width: 100%;
  height: 100vh; /* Utiliza 100vh para ajustar el tamaño del contenedor a la altura completa de la ventana */
}

</style>
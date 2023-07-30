
<template>
  <div class=" home">
    <button v-for="(img, index ) in images" :key="index" @click="img.method"
      class="flex flex-col items-center align-middle content-center mt-2 transition hover:-translate-y-1 hover:scale-110 duration-200  hover:shadow-white hover:drop-shadow-2xl">
      <img :src="img.url" alt="image description" class="mt-2 w-40 h-52">
      <h1 class=" text-2xl">{{ img.name }}</h1>
    </button>


    <!-- <button
 
      class="flex flex-col items-center align-middle content-center rounded-full bg-white transition hover:-translate-y-1 hover:scale-110 duration-200 w-72 h-72 hover:shadow-white hover:drop-shadow-2xl border-8 border-purpleD-800">
      <img src="../assets/images/kid.png" alt="image description" class="mt-8 w-40 h-44">
      <h1 class=" text-2xl">Kid's</h1>
    </button> -->
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();



const kid = () => {
  router.push("/kid")
}

const music = () => {
  router.push("/kid/music")
}


const images = [
  {
    "url": "/src/assets/images/BtMusic.png",
    "method": music,
    "name": "Música"
  },
 
  {
    "url": "/src/assets/images/4.png",
    "method": kid,
    "name": "Deporte"
  },
  {
    "url": "/src/assets/images/5.png",
    "method": kid,
    "name": "Creatividad"
  },
  {
    "url": "/src/assets/images/6.png",
    "method": kid,
    "name": "Lectura"
  },
  {
    "url": "/src/assets/images/7.png",
    "method": kid,
    "name": "Dibujo"
  }
]

</script>

<style scoped>
.home {

  flex-wrap: wrap;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  /* Establece la imagen de fondo */
  background-image: url("../assets/images/8.jpg");
  /* Ajusta el tamaño y la posición de la imagen */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* Asegura que el contenedor ocupe toda la pantalla */
  width: 100%;
  height: 100vh;
  /* Utiliza 100vh para ajustar el tamaño del contenedor a la altura completa de la ventana */
}
</style>
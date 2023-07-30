<template>
    <div class=" home">
        <button
        @click="result"
      class="flex mt-14 ml-8 flex-col items-center align-middle content-centertransition hover:-translate-y-1 hover:scale-110 duration-200 w-72 h-72 hover:shadow-white hover:drop-shadow-2xl">
      <img src="../assets/images/piano.png" alt="image description" class="mt-8 w-52 h-52">
    </button>
    </div>
</template>


<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();


const result = () => {
  router.push("/kid/music/results")
}


</script>



<style scoped>
.home {

  flex-wrap: wrap;

  display: flex;
  /* justify-content: space-evenly;
  align-items: center; */
  
  /* Establece la imagen de fondo */
  background-image: url("../assets/images/h.jpg");
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
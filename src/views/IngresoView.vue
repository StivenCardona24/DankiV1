import { useRouter } from "vue-router";

<template>
  <div class=" home">
    <button
    @click="baby()"
      class="flex flex-col items-center align-middle content-center rounded-full bg-white transition hover:-translate-y-1 hover:scale-110 duration-200 w-72 h-72 hover:shadow-white hover:drop-shadow-2xl border-8 border-purpleD-800">
      <img src="../assets/images/baby.png" alt="image description" class="mt-4 w-40 h-52">
      <h1 class=" text-2xl">Baby's</h1>
    </button>


    <button
    @click="kid()"
      class="flex flex-col items-center align-middle content-center rounded-full bg-white transition hover:-translate-y-1 hover:scale-110 duration-200 w-72 h-72 hover:shadow-white hover:drop-shadow-2xl border-8 border-purpleD-800">
      <img src="../assets/images/kid.jpg" alt="image description" class="mt-8 w-40 h-44">
      <h1 class=" text-2xl">Kid's</h1>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();


const baby = () => {
  router.push("/baby")
}

const kid = () => {
  router.push("/kid")
}


</script>



<style scoped>
.home {

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* Establece la imagen de fondo */
  background-image: url("../assets/images/fondo2.jpg");
  /* Ajusta el tamaño y la posición de la imagen */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: auto;
  /* Asegura que el contenedor ocupe toda la pantalla */
  width: 100%;
  height: 100vh;
  /* Utiliza 100vh para ajustar el tamaño del contenedor a la altura completa de la ventana */
}
</style>




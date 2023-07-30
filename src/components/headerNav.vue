<template>

<nav class=" p-6">

  <div class="flex md:order-2">
      <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="text-white  bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-orange-900" >Inicia Sesión</button>
      <button data-modal-target="register-modal" data-modal-toggle="register-modal"  class="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-orange-900" >Registrate</button>
  </div>
 
</nav>


<!-- Login modal -->
<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <LoginForm/>   
</div>

<!-- register modal -->
<div id="register-modal" tabindex="-1" aria-hidden="true" class=" fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <RegisterForm/>   
</div>

</template>

<script setup lang="ts">

import LoginForm from "./LoginForm.vue"
import RegisterForm from './RegisterForm.vue'



</script>
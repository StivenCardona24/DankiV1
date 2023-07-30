<template>

<!-- Main modal -->

    <div class="relative w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-blueD-100 rounded-lg shadow ">
            <button type="button" class="absolute top-3 right-2.5 text-purpleD-800 bg-transparent hover:bg-gray-200 hover:text-purpleD-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Cerrar</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-purpleD-800 dark:text-white">Inicia Sesión</h3>
                <div class="space-y-6" >
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-purpleD-800 ">Usuario</label>
                        <input v-model="user.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-purpleD-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-purpleD-600" placeholder="name@company.com" required>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-purpleD-800 ">Contraseña</label>
                        <input v-model="user.password" type="password" name="password" id="password" placeholder="Contraseña" class="bg-gray-50 border border-gray-300 text-purpleD-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-purpleD-600" required>
                    </div>
                    <div class="flex justify-end">
                       
                        <a href="#" class="text-sm text-purpleD-700 hover:underline ">Olvidó su contraseña?</a>
                    </div>
                    <button  class="w-full text-white bg-purpleD-800 hover:bg-purpleD-900 focus:ring-4 focus:outline-none focus:ring-purpleD-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" data-modal-hide="authentication-modal" @click="beforeLogin(user)">Iniciar Sesión</button>
                    <div class="text-sm font-medium text-purpleD-800">
                        No estas registrado? <a href="#" class="text-purpleD-500 hover:underline ">Crear una cuenta</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from 'vue';
import { login } from '../store/userService'



const router = useRouter();

const user = ref({
    "email":"",
    "password": ""
})

const beforeLogin = (us:any) => {
    let ward = false;
    ward = login(us);
    console.log(ward)
    if(ward){
        router.push("/ingreso")
        
        
    }

}



</script>
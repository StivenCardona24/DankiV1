import { ref } from "vue";

import { ref } from "vue";

<template>
    <!-- Main modal -->

    <div class="relative w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-purpleD-100 rounded-lg shadow ">
            <button type="button"
                class="absolute top-3 right-2.5 text-purpleD-800 bg-transparent hover:bg-gray-200 hover:text-purpleD-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                data-modal-hide="register-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Cerrar</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-purpleD-800 dark:text-white">Inicia Sesión</h3>
                <div class="space-y-6" >
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-purpleD-800 ">Nombre:</label>
                        <input v-model="user.name" type="name" name="name" id="name"
                            class="bg-gray-50 border border-gray-300 text-purpleD-800 text-sm rounded-lg focus:ring-purpleD-500 focus:border-purpleD-500 block w-full p-2.5 placeholder-purpleD-600"
                            placeholder="Nombre" required>
                    </div>
                    <div>
                        <label for="lastName" class="block mb-2 text-sm font-medium text-purpleD-800 ">Apellido:</label>
                        <input v-model="user.lastName" type="lastName" name="lastName" id="lastName"
                            class="bg-gray-50 border border-gray-300 text-purpleD-800 text-sm rounded-lg focus:ring-purpleD-500 focus:border-purpleD-500 block w-full p-2.5 placeholder-purpleD-600"
                            placeholder="Apellido" required>
                    </div>

                    <label class="block text-sm font-medium text-purpleD-800 ">Fecha de nacimiento:</label>
                    <div class="relative max-w-sm">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-purpleD-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input v-model="user.birthday" datepicker type="date"
                            class="bg-gray-50 border placeholder-purpleD-800 border-purpleD-300 text-purpleD-800 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5"
                            placeholder="Fecha de nacimiento">
                    </div>

                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-purpleD-800 ">Usuario</label>
                        <input v-model="user.email" type="email" name="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-purpleD-800 text-sm rounded-lg focus:ring-purpleD-500 focus:border-purpleD-500 block w-full p-2.5 placeholder-purpleD-600"
                            placeholder="name@company.com" required>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-purpleD-800 ">Contraseña</label>
                        <input v-model="user.password" type="password" name="password" id="password" placeholder="Contraseña"
                            class="bg-gray-50 border border-gray-300 text-purpleD-800 text-sm rounded-lg focus:ring-purpleD-500 focus:border-purpleD-500 block w-full p-2.5 placeholder-purpleD-600"
                            required>
                    </div>
                    <div class="flex justify-end">
                </div>
                <button
                @click="register(user)"
                    class="w-full text-white bg-purpleD-800 hover:bg-purpleD-900 focus:ring-4 focus:outline-none focus:ring-purpleD-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Guardar
                    </button>
                
                </div>
        </div>
    </div>
</div></template>

<script setup lang="ts">
import { ref } from 'vue';
import { register } from '../store/userService';
const user = ref({
    "name":"",
    "lastName":"",
    "birthday":"",
    "email":"",
    "password": ""
})





</script>
<template>
    <nav class="w-full py-4 bg-blue-800 shadow">
        <div
            class="w-full container mx-auto flex flex-wrap items-center justify-between"
        >
            <nav>
                <ul
                    class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline"
                >
                    <li>
                        <router-link
                            class="hover:text-gray-200 hover:underline px-4"
                            to="/home"
                            >home</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            class="hover:text-gray-200 hover:underline px-4"
                            to="/about"
                            >About</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            class="hover:text-gray-200 hover:underline px-4"
                            to="/login"
                            v-if="Guest"
                            >Login</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            class="hover:text-gray-200 hover:underline px-4"
                            to="/register"
                            v-if="Guest"
                            >Register</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            class="text-gray-200 hover:underline"
                            to="/profile"
                            v-if="!Guest"
                            >profile</router-link
                        >
                    </li>
                </ul>
            </nav>

            <button
                class="text-gray-200 hover:underline"
                v-if="!Guest"
                @click="authStore.logout()"
            >
                logout
            </button>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/authStore";
const Guest = ref(true);
const authStore = useAuthStore();
if (localStorage.getItem("Authanticated")) {
    Guest.value = false;
}
</script>
<style scoped>
.router-link-active {
    text-decoration: underline;
}
</style>
